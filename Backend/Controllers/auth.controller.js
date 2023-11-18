import userModule from "../Modules/user.module.js";
// import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(404).json({ success: false, message: "all feilds are mandatory" })

        // const hashedPass = bcrypt.hash(password) 

        const user = await new userModule({ name, email, password })
        if (!user) return res.status(401).json({ success: false, message: "User not found" })

        user.save();

        return res.status(200).json({ success: true, message: "Registered Successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }

}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(404).json({ success: false, message: "all feilds are mandatory" })

        const user = await userModule.findOne({ email: email })
        if (!user) return res.status(401).json({ success: false, message: "User email is invalid" })

        return res.status(200).json({ success: true, message: "Logged In Successfully" })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}