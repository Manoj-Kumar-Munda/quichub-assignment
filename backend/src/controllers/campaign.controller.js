import mongoose from "mongoose";
import Campaign from "../models/campaign.model.js";
import MessageStatus from "../models/status.model.js";
import { getPhoneNumbersFromCSV } from "../utils/helpers.js";

export const createCampaign = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, message } = req.body;
    const csvFile = req.file.path;
    console.log(csvFile);
    const phoneNumbers = await getPhoneNumbersFromCSV(csvFile);
    const campaign = await Campaign.create([{ name, message }], { session });
    if (!campaign || campaign.length === 0) {
      throw new Error("Failed to create campaign");
    }

    console.log(campaign);

    const messageStatuses = phoneNumbers.map((phoneNumber) => ({
      phoneNumber,
      campaignId: campaign[0]._id,
      status: Math.random() < 0.5,
    }));

    await MessageStatus.create(messageStatuses, { session });

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      status: true,
      message: "Campaign created successfully",
      data: campaign,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    const messageStatuses = await MessageStatus.find();
    
    const data = campaigns.map((campaign) => {
      const campaignData = campaign.toObject();
      
      const statuses = messageStatuses.filter(
        (status) => status.campaignId.toString() === campaign._id.toString()
      );

      const delivered = statuses.filter((status) => status.status === true).length;
      const failed = statuses.filter((status) => status.status === false).length;

      return {
        ...campaignData,
        delivered,
        failed
      };
    });

    return res.status(200).json({
      status: true,
      message: "Campaigns fetched successfully",
      data
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
