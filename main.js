// server.js
const express = require('express');
const app = express();
const patients = require("./patients");

app.get('/get-patient', (req, res) => {
    const authHeader = req.headers['auth'];
    let patient;
    switch(authHeader){
        case "patientOne":
            patient = patients.patientOne;
        case "patientTwo":
            patient = patients.patientTwo;
        case "patientThree":
            patient = patients.patientThree;
    }

    if(patient){
        res.status(200).send(patient)
    }else {
        res.status(400);
    }
    
});

module.exports = app;
 