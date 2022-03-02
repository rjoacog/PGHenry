const Product = require('../models/Product');


const newProduct = async (req, res) => {
    const product = new Product(req.body);   //Creamos un nuevo producto

    try {
        const addProductinDB = await product.save();
        res.json(addProductinDB);
    } catch (error) {
        console.log(error);
    }
};

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};


module.exports = {
    newProduct,
    getProducts
}