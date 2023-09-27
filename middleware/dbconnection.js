// dbconnection.js
import mongoose from 'mongoose';

const connectdb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.mongodburl);
    }

    return async (req, res) => {
        await handler(req, res);
    };
};

export  { connectdb };
