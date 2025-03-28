const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Load products from JSON file
const loadProducts = () => {
    try {
        const data = fs.readFileSync("products.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Save products to JSON file
const saveProducts = (products) => {
    fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
};

// Load orders from JSON file
const loadOrders = () => {
    try {
        const data = fs.readFileSync("orders.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Save orders to JSON file
const saveOrders = (orders) => {
    fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2));
};

// Route: GET all products
app.get("/products", (req, res) => {
    const products = loadProducts();
    res.json(products);
});

// Route: POST a new product
app.post("/products", (req, res) => {
    const products = loadProducts();
    const newProduct = { id: Date.now(), ...req.body };
    products.push(newProduct);
    saveProducts(products);
    res.status(201).json(newProduct);
});

// Route: GET all orders
app.get("/orders", (req, res) => {
    const orders = loadOrders();
    res.json(orders);
});

// Route: POST a new order
app.post("/orders", (req, res) => {
    const orders = loadOrders();
    const newOrder = { id: Date.now(), ...req.body };
    orders.push(newOrder);
    saveOrders(orders);
    res.status(201).json(newOrder);
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
