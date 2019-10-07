const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);

console.log('Running...');