import user from "../modules/user.js";
import bcrypt from "bcryptjs";
import { createtoken } from "../utils/token-manager.js";
export const getAllUser = async (req, res, next) => {
    try {
        const users = await user.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const signUpUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already registered");
        const hashedpassword = await bcrypt.hash(password, 10);
        const users = new user({ name, email, password: hashedpassword });
        await users.save();
        return res.status(200).json({ message: "OK", id: users._id.toString(), password: password });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const users = await user.findOne({ email });
        if (!users) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await bcrypt.compare(password, users.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }
        // create token and store cookie
        res.clearCookie("auth_token", {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = createtoken(users._id.toString(), users.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie("auth_token", token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: users.email });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-routes.js.map