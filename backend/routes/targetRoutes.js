import express from 'express';
import multer from 'multer';
import { uploadTargets, getTargets } from '../controllers/targetController.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.single('file'), uploadTargets);
router.get('/', getTargets);

export default router;
