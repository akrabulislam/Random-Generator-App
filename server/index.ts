/**
 * import All the modules
 */
require('dotenv').config({ path: './config.env' });
import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

/**
 * middleware to use
 * cors
 * expressjson
 * routes
 */
app.use(cors());
app.use(express.json());
app.use(routes);

// Production Deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}

/**
 * extract PORT from env file
 * initiate the app
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.info(`Server listening at PROT: ${PORT}`);
});
