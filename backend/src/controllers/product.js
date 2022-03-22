const Product = require('../models/Product');
const User = require('../models/User');


const newProduct = async (req, res) => {
    //Obtenemos el usuario que está autenticado gracias al middleware checkAuth:
    const user = req.user  
    if( user.role === 'admin') {
        const product = new Product(req.body);   //Creamos un nuevo producto

        try {
            const addProductinDB = await product.save();
            res.json(addProductinDB);
        } catch (error) {
            console.log(error);
        }

    } else {
        const error = new Error('Need to be an Admin.');
        return res.status(401).json({ msg: error.message });
    }

};
//Obtener todos los productos:
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const createManyProducts = async (req, res) => {
    //Obtenemos el usuario que está autenticado gracias al middleware checkAuth:
    const user = req.user  
    if( user.role === 'admin') {
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
    } else {
        const error = new Error('Need to be an Admin.');
        return res.status(401).json({ msg: error.message });
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
    //Obtenemos el usuario que está autenticado gracias al middleware checkAuth:
    const user = req.user  
    if( user.role === 'admin') {
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

    } else {
        const error = new Error('Need to be an Admin.');
        return res.status(401).json({ msg: error.message });
    }
};
//Eliminar producto:
const deleteProduct = async (req, res) => {
    //Obtenemos el usuario que está autenticado gracias al middleware checkAuth:
    const user = req.user  
    if( user.role === 'admin') {
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

    } else {
        const error = new Error('Need to be an Admin.');
        return res.status(401).json({ msg: error.message });
    }
};

//Editar Stock:
const updateStock = async (req, res) => {
    const { id } = req.params;
    const { action } = req.body;
    const product = await Product.findById(id);
    try {
        if (action === "decrement") {
            product.stock = product.stock - 1
            const deleteProduct = await product.save()
            res.status(200).json({
                msg: 'Restando',
                deleteProduct
            })
        }
        if (action === 'increment') {
            product.stock = product.stock + 1
            const addProduct = await product.save()
            console.log(addProduct)
            res.status(200).json({
                msg: 'Sumando',
                addProduct
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Error on Stock Action.'
        })
    }
    
    
};

//Review de producto:
const productReview = async (req, res) => {
    const { id } = req.query;
    const { review, rating, user } = req.body;
    console.log( "Body: ", req.body )
    console.log("ID: ", id )
    const product = await Product.findById(id);

    const filterReviews = product.reviews.filter(review => review.user === user);
    if (filterReviews?.length > 0) {
        res.status(400).json({
            msg: 'You have already reviewed this product'
        })
    } else {
        try {
            const newReview = { review, rating, user }
            product.reviews.push(newReview);
            await product.save();
            res.status(200).json({
                msg: 'Successful',
                product
            });

        } catch (error) {
            console.log(error);
            res.status(400).json({
                msg: 'Your request could not be processed. Please try again.'
            })
        }
    }
};



module.exports = {
    newProduct,
    getProducts,
    createManyProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    productReview,
    updateStock
}