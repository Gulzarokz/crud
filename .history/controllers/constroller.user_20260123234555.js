import { User } from "../models/models.user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "This User email is already registered"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        })
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully"
        })
    } catch (error) {

        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}


//login for user 
export const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are requird"
            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(403).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const token = await jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' });

        res.status(200).cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000

        }).json({
            success: true,
            message: "user logged in successfully"
        })

    } catch (error) {
        console.log("login error", error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }
}
