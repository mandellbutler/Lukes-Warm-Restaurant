const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3800;

app.get('/', function (req, res) {
    res.send('hello world')
})



app.listen(PORT, () => console.log(`We chopping it up on PORT ${PORT}`));