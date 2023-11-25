import productModule from "../Modules/product.module.js";

export const addProduct = async (req, res) => {
    try {
        const { productName, productImg, productCategory } = req.body;
        if (!productName || !productImg || !productCategory) return res.status(404).json({ success: false, message: "all feilds are mandatory" })

        const product = await new productModule({ productName, productImg, productCategory })
        if (!product) return res.status(401).json({ success: false, message: "product not found" })

        const response = await product.save()

        return res.status(200).json({ success: true, message: "Product added Successfully" })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}