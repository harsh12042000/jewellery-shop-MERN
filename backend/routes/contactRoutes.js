import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';

const contactRouter = express.Router();

contactRouter.post('/contactus', expressAsyncHandler(async (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    const cnt = await newContact.save();
    res.send({
        name: cnt.name,
    });
}))

export default contactRouter;