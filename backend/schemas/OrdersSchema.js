const {Schema} = require('mongoose');

const OrdersSchema = new Schema({
    name: String,
    // price: Number,
    // percent: String,
    // isDown: Boolean,
    qty : Number,
    price : Number,
    mode : String,
});
module.exports = {OrdersSchema};