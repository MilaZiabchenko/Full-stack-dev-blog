import { getAuth } from 'firebase-admin/auth';
const verifyUser = async (req, res, next) => {
    const { authtoken } = req.headers;
    if (authtoken) {
        try {
            req.user = await getAuth().verifyIdToken(authtoken);
        }
        catch (err) {
            return res
                .status(400)
                .json({ message: 'You are not allowed to see this content' });
        }
    }
    req.user = req.user || {};
    next();
};
export { verifyUser };
//# sourceMappingURL=authentication.middleware.js.map