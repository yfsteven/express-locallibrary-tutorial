const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'not here'})
});

app.listen(5000);