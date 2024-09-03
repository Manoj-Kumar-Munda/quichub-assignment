import Campaign from "../models/campaign.model.js";

export const createCampaign = async (req, res) => {
  try {
    const { name, message } = req.body;
    const campaign = await Campaign.create({ name, message });
    if (!campaign) {
      return res.status(400).json({
        status: false,
        message: "Failed to create campaign",
      });
    }
    return res.status(201).json({
      status: true,
      message: "Campaign created successfully",
      data: campaign,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


