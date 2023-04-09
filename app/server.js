const express = require('express');
const app = express();
const converter = require('./converter')
app.get('/rgbToHex', function(req, res) {
    const query = req.query;
    const red = parseInt(query.red, 10);
    const green = parseInt(query.green, 10);
    const blue = parseInt(query.blue, 10);
    const result = converter.rgbToHex(red, green, blue);
    res.send(result);
})

app.get('/hexToRgb', function(req, res) {
    const hex = req.query.hex;
    const rgb = converter.hexToRgb(hex);
    res.send(JSON.stringify(rgb));
})

app.listen(3000, () => {
    console.log('listen: 3000');
});