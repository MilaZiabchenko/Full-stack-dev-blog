import { ObjectId } from 'mongodb';
import type { Comment } from './Comment.model.js';

type Article = {
  readonly _id: ObjectId;
  name: string;
  upvotes: number;
  upvoteIds: string[];
  comments: Comment[];
  canUpvote: boolean;
};

export type { Article };
