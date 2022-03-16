// const { Order, Product, Price, Order_detail, User} = require("../models");


// const addOrderToDB = async function({userId, shoppingCart, shippingInfo}) {
//     const {name, lastName, adress, phone, email} = shippingInfo;
//     let user = await User.findById(userId)
    
//     shoppingCart.map(item => item.subtotal = item.quantity * item.price)
//     let acc = 0
    
//     shoppingCart.forEach(item => acc = acc + item.subtotal)
//     let order = await Order.create({total: acc, name, lastName, adress: adress, phone, email}) 
    
//     await order.setUser(user) 
//         for (shoe of shoppingCart) {
//             console.log(shoe)
//             let shoe = await Product.findById(shoe._id)
            
//             await Order_detail.create({orderId: order._id, productId: Product._id, size: shoe.size, subtotal: shoe.subtotal, total: shoe.total})
            
//             let sizes = await shoe.getAvailableSize()  
//             let shoeSize = shoe.size  
//             sizes[shoeSize] = sizes[shoeSize] - (shoe.total)
//             await sizes.save() 
            
//             shoe.stock = shoe.stock - shoe.total
//             await shoe.save()   
//         }
//         return('Order created')
// }

// const getOrdersFromDB = async function ({email = "", _id = ""}) {
//     const user = await User.findOne({where: {email: email}})
//         if(!user) {
//             return "Invalid User"
//         }
//         if(id) {
//             let order
//             try {
//                 let order = await Order_detail.findAll({where:{orderId: _id}, raw: true})
//                 let shoes = []
//                 let totalAcc = 0
//                 let generalOrder = await Order.findById(_id,{raw: true})
//                 for (ord of order){
//                     let foundShoe = await Product.findById(ord.shoeId, {raw:true})
//                     let price = await Price.findById(foundShoe.priceId, {raw:true})
//                     totalAcc = totalAcc + (ord.quantity * price.retailPrice)
//                     shoes.push({...foundShoe, size: ord.size, quantity: ord.cuantity, price: price.retailPrice})
//                 }
//                 order[0].status = generalOrder.status
//                 order[0].shoes = shoes
//                 order[0]._id = id
//                 order[0].total = totalAcc
                
//                 return JSON.parse(JSON.stringify(order[0]))
//             } catch(err) {
//             console.log(err);
//             }
        
//         if(!order) {
//                 return 
//         }
        
//         if(user.roleId === 2) {
//             return order;
//         } else {
//             if(user._id === order.userId) {
//                 return order;
//             } else {
//                 return "You don´t have access to this server"
//             }
//         }
        
//     }
    
//     if(user.roleId === 2) {
//         return (await Order.findAll({include: [{all: true}]}))
//     } else {
//         return (await Order.findAll({include: {model: Product}, where: {userId: user._id}}))
//     }
// }

// const updateStatusOrderFromDB = async function({email ="", status ="", _id =""}){
//     const user = await User.findOne({where: {email: email}})
//         if(user.roleId === 2) {
//             let order = await Order.findById(_id);
//             order.status = status;
//             await order.save();
//             return order;
//         } else {
//             return "You don´t have access to this action"
//         }
// }


// module.exports = {
//     addOrderToDB,
//     getOrdersFromDB,
//     updateStatusOrderFromDB
// }