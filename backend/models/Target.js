import mongoose from 'mongoose';

const targetSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  clicked: { type: Boolean, default: false },
  reported: { type: Boolean, default: false },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
});

export default mongoose.model('Target', targetSchema);
