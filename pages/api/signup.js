import UserSchema from "../../models/user";
import { connectdb } from '../../middleware/dbconnection';
import mongoose from 'mongoose'
const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            console.log(req.body)
            // Connect to the MongoDB database
    // await mongoose.connect("mongodb://127.0.0.1:27017/nextjsapp");
            // Use await here to wait for the result of UserSchema.find()
            let users = await UserSchema.find({
                email: req.body.email
            });

            if (users.length > 0) { // Check if users array has any items
                return res.status(200).json({ message: "Sorry, user with this email already exists." });
            } else {
                let newUser = await new UserSchema({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                await newUser.save();
                
    // Close the database connection
    // await mongoose.connection.close();
                return res.status(201).json({ message: "User registered successfully." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error." });
        }
    } else {
        return res.status(400).json({ message: "Sorry, this method is not supported." });
    }
};

export default connectdb(handler);
