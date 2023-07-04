const express = require('express');
const app = express();
const PORT = 3000;
const localhost = "http://localhost:";


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/products', (req, res) => {
    console.log("GET request received for '/products' ")
    res.json([{ a: 1 }, { a: 2 }, { a: 3 }]);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
    console.log(`${localhost}${PORT}`);
});