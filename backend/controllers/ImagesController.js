// backend/controllers/ImagesController.js
import https from 'https';

const internalServerErrMsg = 'Internal Server Error';
// EXTERNAL_API_URL
const externalApiUrl = `https://d53e9e5f-1edb-4d0e-95cc-9c41436949b2.mock.pstmn.io/moon-data`;

/**
 * /api/numbers
 *   get:
 *     tags:
 *       - images
 *     @description : returns the object of images collection
 *     response:
 *       200:
 *          description: single object with collection of images
 */
export const getImages = (req, res) => {
  try {
    // HTTPS GET request to the external API
    https.get(externalApiUrl, (apiResponse) => {
      let data = '';

      // executes when chunk of data is recieved from api
      apiResponse.on('data', (chunk) => {
        data += chunk;
      });

      // executes when all data is fetched from api
      apiResponse.on('end', () => {
        const imageUrls = JSON.parse(data);
        res.json(imageUrls);
      });
    });
  } catch (error) {
    console.error('Error fetching data from the external API:', error);
    res.status(500).json({ error: internalServerErrMsg });
  }
};
