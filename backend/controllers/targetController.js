import Target from '../models/Target.js';
import csvParser from 'csv-parser';
import fs from 'fs';

export const uploadTargets = async (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', data => results.push(data))
    .on('end', async () => {
      await Target.insertMany(results);
      fs.unlinkSync(req.file.path);
      res.json({ success: true });
    });
};

export const getTargets = async (req, res) => {
  const targets = await Target.find();
  res.json(targets);
};
