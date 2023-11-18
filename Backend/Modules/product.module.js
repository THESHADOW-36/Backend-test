import { Schema } from "mongoose";

const products = new Schema({
    productNames: String,
    productImg: String,
    productcategory: String
})

export default mongoose.model("products", products)