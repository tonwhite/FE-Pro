const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const localhost = "http://localhost:";

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Take a look ${localhost}${PORT}`);
});

const fs = require('fs');
let products = [];

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
        products = JSON.parse(data);
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Products API!');
});

app.get('/products', (req, res) => {
    const { inStock, minPrice, maxPrice } = req.query;
    let result = products;

    if (inStock !== undefined) {
        const stockBool = inStock === 'true';
        result = result.filter(product => product.productStock === stockBool);
    }

    if (minPrice !== undefined) {
        result = result.filter(product => Number(product.productPrice) >= Number(minPrice));
    }

    if (maxPrice !== undefined) {
        result = result.filter(product => Number(product.productPrice) <= Number(maxPrice));
    }

    res.json(result);
});

app.get('/products/search', (req, res) => {
    const { productName } = req.query;
    const result = products.filter(product => product.productName.includes(productName));
    res.json(result);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.productId === Number(id));
    res.json(product || {});
});
