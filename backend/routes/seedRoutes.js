import express from "express";
import Product from "../models/productModel.js";
import data from '../data.js';
import User from "../models/userModel.js";

//creating the seeds for our database to add all the data in one go
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    // first remove all previous records in the product model  
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    await User.deleteMany({});
    const userProducts = await User.insertMany(data.users);
    res.send({ createdProducts, userProducts });
});


export default seedRouter;