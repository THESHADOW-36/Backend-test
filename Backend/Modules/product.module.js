import mongoose, { Schema } from "mongoose";

const products = new Schema({
    productNames: String,
    productImg: String,
    productCategory: String
},{timestamp:true})

export default mongoose.model("products", products)