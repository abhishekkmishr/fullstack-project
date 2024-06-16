import Product from '../models/product.model.js';

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        const product = new Product({ name, price, description, category, stock });
        await product.save();
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ message: 'Error creating product', error: error.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({ message: 'Error retrieving products', error: error.message });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ message: 'Error retrieving product', error: error.message });
    }
};

export { createProduct, getProducts, getProductById };
