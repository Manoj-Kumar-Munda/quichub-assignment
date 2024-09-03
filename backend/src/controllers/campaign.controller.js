import mongoose from 'mongoose';
import Campaign from "../models/campaign.model.js";
import MessageStatus from "../models/status.model.js";

export const createCampaign = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, message, phoneNumbers } = req.body;

    const campaign = await Campaign.create([{ name, message }], { session });
    if (!campaign || campaign.length === 0) {
      throw new Error("Failed to create campaign");
    }

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
      data: campaign[0],
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


