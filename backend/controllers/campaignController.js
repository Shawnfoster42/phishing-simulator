import Campaign from '../models/Campaign.js';

export const createCampaign = async (req, res) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.json({ success: true });
};

export const getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find().populate('templateId');
  res.json(campaigns);
};
