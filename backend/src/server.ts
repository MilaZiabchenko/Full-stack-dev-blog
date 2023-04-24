import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';
import { initializeApp, cert } from 'firebase-admin/app';
import express, { type Request, type Response } from 'express';
import { connectToDb } from './services/db.service.js';
import { verifyUser } from './middleware/authentication.middleware.js';
import articlesRouter from './routes/article.routes.js';
import { getErrorMessage } from './utils/errorMessage.util.js';

const credentials = JSON.parse(
  JSON.stringify({
    type: process.env.FIREBASE_ADMIN_TYPE,
    project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
    private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
    auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
    token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL
  })
);

initializeApp({
  credential: cert(credentials)
});

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, './../../frontend/dist')));

app.get(/^(?!\/api).+/, (_req: Request, res: Response) => {
  res.sendFile(join(__dirname, './../../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;

connectToDb()
  .then(() => {
    app.use(verifyUser);
    app.use('/api/articles', articlesRouter);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  })
  .catch(err => {
    getErrorMessage(err);

    process.exit();
  });
