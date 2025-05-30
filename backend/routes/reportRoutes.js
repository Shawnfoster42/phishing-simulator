import express from 'express';
import Target from '../models/Target.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Target.find().populate('campaignId');
  res.json(data);
});

export default router;
