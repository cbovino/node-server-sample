// server.js
const express = require('express');
const app = express();

app.get('/hello-world', (req, res) => {
    const authHeader = req.headers['auth'];
    if (authHeader) {
        res.status(200).json({ valid: true });
    } else {
        res.status(404).send('Not Found');
    }
});

module.exports = app;
