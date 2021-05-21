const express = require('express');

const app = express();
app.use(express.json());

let count = 0;

app.get('/count', (req, res) => {
    res.json({ count });
});

app.put('/count/increment', (req, res) => {
    const { amount } = req.body;
    count += amount;
    res.json({ count });
});

app.put('/count/reset', (req, res) => {
    count = 0;
    res.json({ count });
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});