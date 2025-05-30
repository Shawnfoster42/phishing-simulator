import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  name: String,
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
  createdAt: { type: Date, default: Date.now },
  scheduledAt: Date,
});

export default mongoose.model('Campaign', campaignSchema);
