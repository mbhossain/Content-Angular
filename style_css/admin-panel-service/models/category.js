const mongoose = require('mongoose')

const Schema = mongoose.Schema
const categorySchema = new Schema({
    name: String,
    description: String,
    title: String,
    product_no: Number
})
module.exports = mongoose.model('category', categorySchema, 'categories')