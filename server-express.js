const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const localhost = "http://localhost:";


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products', (req, res) => {
    console.log("GET request received for '/products' ")
    res.json({ name: "Bobik", age: 10, city: "Bambas" });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
    console.log(`Open this link, don't fear ${localhost}${PORT}`);
});