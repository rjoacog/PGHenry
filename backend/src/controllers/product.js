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
//Obtener todos los productos:
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const createManyProducts = async (req, res) => {
    try {
        await Product.insertMany(req.body)
        res.status(200).json({
            message: 'Successful'
        });
    }

    catch {
        console.log(error)
        res.status(400).json({
            message: 'Your request could not be processed. Please try again.'
        })
    }
};
//Obtener un producto:
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const productId = await Product.findById(id);
        res.status(200).json(productId);
    } catch (error) {
        res.status(404).json({
            message: "Cannot get the product"
        });
    }
};
//Actualizar producto:
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, stock, price, brand, color, model, category, gender, size } = req.body;
    try {
        const updateProduct = { name, description, image, stock, price, brand, color, model, category, gender, size, _id: id }
        await Product.findByIdAndUpdate(id, updateProduct, { new: true });
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    };
};
//Eliminar producto:
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const remove = await Product.findOneAndRemove({ _id: id });
        res.status(200).json({
            message: 'Successful',
            remove
        });
    }

    catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Your request could not be processed. Please try again.'
        })
    };
};



module.exports = {
    newProduct,
    getProducts,
    createManyProducts,
    getProduct,
    updateProduct,
    deleteProduct
}