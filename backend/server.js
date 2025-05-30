import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import config from './config.js';

import campaignRoutes from './routes/campaignRoutes.js';
import authRoutes from './routes/authRoutes.js';
import templateRoutes from './routes/templateRoutes.js';
import targetRoutes from './routes/targetRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/targets', targetRoutes);
app.use('/api/reports', reportRoutes);

// Start
connectDB();
app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});
