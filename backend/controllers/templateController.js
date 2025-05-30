import Template from '../models/Template.js';

export const getTemplates = async (req, res) => {
  const templates = await Template.find();
  res.json(templates);
};

export const addTemplate = async (req, res) => {
  const template = new Template(req.body);
  await template.save();
  res.json({ success: true });
};

export const deleteTemplate = async (req, res) => {
  await Template.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
