const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Dummy whitelist data
const whitelist = [
    '0x93a7c39d7f848A1e9C479C6FE1F8995015Ea2fb9',
    '0xeA29a9ce557696A98b4607Ab47754c4F800527f2',
    '0x96dd18Ad9697a40EA2F75E051a801B6733d589D1',
    '0x533288cd2460af66eCF96Ee21281D96DA6CE46e6'
];

// Route to check wallet address
app.post('/check', (req, res) => {
    const { wallet } = req.body;
    
    if (!wallet) {
        return res.status(400).json({ error: 'Wallet address is required' });
    }

    if (whitelist.includes(wallet.toLowerCase())) {
        return res.status(200).json({ status: 'Eligible' });
    } else {
        return res.status(403).json({ status: 'Ineligible' });
    }
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
