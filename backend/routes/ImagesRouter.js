// backend/routes/ImagesRouter.js

import express from 'express';
import { getImages } from '../controllers/ImagesController.js';

const router = express.Router();

// GET method route to fetch images
router.get('/images', getImages);

export default router;
