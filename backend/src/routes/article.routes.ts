import express from 'express';
import { authorizeUser } from '../middleware/authorization.middleware.js';
import {
  getArticle,
  upvoteArticle,
  addComment
} from '../controllers/article.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/:name', getArticle);
router.patch('/:name/upvote', authorizeUser, upvoteArticle);
router.put('/:name/comments', authorizeUser, addComment);

export default router;
