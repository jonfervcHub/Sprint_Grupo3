 const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});