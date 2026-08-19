const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const products = [
  { id: 1,
     name: 'iqoo Z11',
      price: 22000 },

  { id: 2,
     name: 'samsung Galaxy z Fold 5',
      price: 19000 },

  { id: 3,
     name: 'hwaie P60 Pro',
      price: 21000 },
];

app.listen(port, () => {
  console.log(`Server is running on`);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const result = products.find((product) => product.id === id);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
    res.json({ success: true, result });
});

app.post("api/products", (req, res) => {
    const product=req.body;
    products.push({ id: products.length + 1, ...product });
    res.json({ success: true, product });
})

app.put("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = req.body;
    const result= products.find((product) => product.id === id);
    if (result == undefined) {
        res.status(404).json({ message: 'Product not found' });
    }
    result.name = product.name;
    result.category = product.category;
    result.price = product.price;
    res.json({ success: true, result });
});

app.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex
    ((product) => product.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        products.splice(index, 1);
        res.json({ success: true, message: 'Product deleted successfully' });
    }
});