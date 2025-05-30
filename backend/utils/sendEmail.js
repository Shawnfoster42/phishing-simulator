import nodemailer from 'nodemailer';
import config from '../config.js';

export const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  await transporter.sendMail({
    from: config.emailUser,
    to,
    subject,
    html,
  });
};
