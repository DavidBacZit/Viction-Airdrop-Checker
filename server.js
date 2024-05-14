// Import the express library
const express = require('express');

// Initialize the express app
const app = express();

// Define the list of random addresses with random rewards
const addressRewards = {
    '0x93a7c39d7f848A1e9C479C6FE1F8995015Ea2fb9':1,
    '0xeA29a9ce557696A98b4607Ab47754c4F800527f2':2,
    '0x96dd18Ad9697a40EA2F75E051a801B6733d589D1':3,
    '0x533288cd2460af66eCF96Ee21281D96DA6CE46e6':4
    // Add more addresses and rewards here
};

// Define the middleware function to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://laughing-funicular-rvp74v7gpgpcrxg-3000.app.github.dev/');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Define the GET endpoint for the API with the 'address' path parameter
app.get('/api/:address', (req, res) => {
    const address = req.params.address;
    const reward = addressRewards[address] || 0;
    res.json({ message: `${reward}` });
});

// Set up the server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
