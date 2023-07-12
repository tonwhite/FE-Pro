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

    if (inStock !== undefined || minPrice !== undefined || maxPrice !== undefined) {
        result = result.filter(product => {
            const productPrice = Number(product.productPrice);

            if (inStock !== undefined && product.productStock.toString() !== inStock) {
                return false;
            }

            if (minPrice !== undefined && productPrice < Number(minPrice)) {
                return false;
            }

            if (maxPrice !== undefined && productPrice > Number(maxPrice)) {
                return false;
            }

            return true;
        });
    }

    res.json(result);
});

app.get('/products/search', (req, res) => {
    const { productName } = req.query;
    const result = products.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase()));
    res.json(result);
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'Product ID must be a number.' });
        return;
    }

    const product = products.find(product => product.productId === id);

    if (!product) {
        res.status(404).json({ error: 'Product not found.' });
        return;
    }

    res.json(product);
});
