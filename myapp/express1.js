"use strict";

const express = require('express');
const Barcode = require("./src/Barcode");
const ZipCode = require("./src/Zipcode");
let app = express();
app.use(express.static("public"));

app.get('/barcode', function (req, res) {
    res.send(new Barcode().changeToZipCode(req.query.code));
});
app.get('/zipCode', function (req, res) {
    res.send(new ZipCode().changeToBarcode(req.query.code));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

