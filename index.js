// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/hello-world', (req, res) => {
    const authHeader = req.headers['auth'];
    if (authHeader) {
        res.status(200).json({ valid: true });
    } else {
        res.status(404).send('Not Found');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
