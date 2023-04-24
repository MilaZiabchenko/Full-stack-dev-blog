import type { Comment } from '../models/Comment.model.js';
import { getObjectProperty } from '../utils/objectProperty.util.js';

const parseCommentInputs = (inputsFromRequest: {
  postedBy: any;
  text: any;
}): Comment => {
  if (
    !inputsFromRequest.postedBy ||
    inputsFromRequest.postedBy !==
      getObjectProperty<Comment, 'postedBy'>(inputsFromRequest, 'postedBy')
  ) {
    throw new Error(`Missing or invalid comment author!`);
  }

  if (
    !inputsFromRequest.text ||
    inputsFromRequest.text !==
      getObjectProperty<Comment, 'text'>(inputsFromRequest, 'text')
  ) {
    throw new Error(`Missing or invalid comment text!`);
  }

  return inputsFromRequest;
};

const createComment = (commentInputs: Comment) =>
  parseCommentInputs({
    postedBy: commentInputs.postedBy,
    text: commentInputs.text
  });

export { createComment };
