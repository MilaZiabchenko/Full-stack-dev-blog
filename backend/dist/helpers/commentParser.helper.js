import { getObjectProperty } from '../utils/objectProperty.util.js';
const parseCommentInputs = (inputsFromRequest) => {
    if (!inputsFromRequest.postedBy ||
        inputsFromRequest.postedBy !==
            getObjectProperty(inputsFromRequest, 'postedBy')) {
        throw new Error(`Missing or invalid comment author!`);
    }
    if (!inputsFromRequest.text ||
        inputsFromRequest.text !==
            getObjectProperty(inputsFromRequest, 'text')) {
        throw new Error(`Missing or invalid comment text!`);
    }
    return inputsFromRequest;
};
const createComment = (commentInputs) => parseCommentInputs({
    postedBy: commentInputs.postedBy,
    text: commentInputs.text
});
export { createComment };
//# sourceMappingURL=commentParser.helper.js.map