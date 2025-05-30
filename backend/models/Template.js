import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: String,
  subject: String,
  body: String,
});

export default mongoose.model('Template', templateSchema);
