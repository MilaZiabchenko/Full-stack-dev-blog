import { cleanEnv, str, email, num, url, port } from 'envalid';
const env = cleanEnv(process.env, {
    DB_CONN_STRING: str(),
    DB_NAME: str(),
    ARTICLES_COLLECTION_NAME: str(),
    FIREBASE_ADMIN_TYPE: str(),
    FIREBASE_ADMIN_PROJECT_ID: str(),
    FIREBASE_ADMIN_PRIVATE_KEY_ID: str(),
    FIREBASE_ADMIN_PRIVATE_KEY: str(),
    FIREBASE_ADMIN_CLIENT_EMAIL: email(),
    FIREBASE_ADMIN_CLIENT_ID: num(),
    FIREBASE_ADMIN_AUTH_URI: url(),
    FIREBASE_ADMIN_TOKEN_URI: url(),
    FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL: url(),
    FIREBASE_ADMIN_CLIENT_X509_CERT_URL: url(),
    PORT: port()
});
export { env };
//# sourceMappingURL=envValidator.helper.js.map