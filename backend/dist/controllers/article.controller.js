import { collection } from './../services/db.service.js';
import { createComment } from '../helpers/commentParser.helper.js';
import { getErrorMessage } from '../utils/errorMessage.util.js';
const getArticle = async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user || {};
    try {
        const article = await collection.findOne({ name });
        if (article) {
            const upvoteIds = article.upvoteIds || [];
            article.canUpvote = uid ? !upvoteIds.includes(uid) : false;
            res.status(200).json(article);
        }
    }
    catch (err) {
        res.status(404).json({
            message: `Unable to find matching article '${name}'`
        });
    }
};
const upvoteArticle = async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;
    try {
        const article = await collection.findOne({ name });
        if (article) {
            const upvoteIds = article.upvoteIds || [];
            const canUpvote = uid ? !upvoteIds.includes(uid) : false;
            if (canUpvote) {
                await collection.updateOne({ name }, {
                    $inc: { upvotes: 1 },
                    $push: { upvoteIds: uid }
                });
            }
            const updatedArticle = await collection.findOne({ name });
            res.status(200).json(updatedArticle);
        }
        else {
            res.status(404).json({
                message: `Unable to find matching article '${name}'`
            });
        }
    }
    catch (err) {
        res.status(304).json({
            message: `Could not update article '${name}'`
        });
    }
};
const addComment = async (req, res) => {
    const { name } = req.params;
    try {
        const article = await collection.findOne({ name });
        if (article) {
            const { postedBy, text } = createComment(req.body);
            if (postedBy && text) {
                await collection.updateOne({ name }, { $push: { comments: { postedBy, text } } });
                const updatedArticle = await collection.findOne({ name });
                res.status(200).json(updatedArticle);
            }
            else {
                res.status(304).json({
                    message: `
          Could not add comment to the article '${name}'
          because some fields are invalid!
          `
                });
            }
        }
        else {
            res.status(404).json({
                message: `Unable to find matching article '${name}'`
            });
        }
    }
    catch (err) {
        res.status(400).json({ message: getErrorMessage(err) });
    }
};
export { getArticle, upvoteArticle, addComment };
//# sourceMappingURL=article.controller.js.map