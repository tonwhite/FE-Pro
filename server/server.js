const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.get('/products', (req, res) => {
    console.log("GET request received for '/products' ")

    res.json({ message: 'Hello from /products' });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});