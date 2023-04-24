const authorizeUser = (req, res, next) => {
    if (req.user) {
        next();
    }
    else {
        res.status(401).json({
            message: 'Sorry, you need to log in to comment and upvote this article'
        });
    }
};
export { authorizeUser };
//# sourceMappingURL=authorization.middleware.js.map