import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }

    res.status(401).send({ message: "Invalid Email or Password!"})
}));

userRouter.post('/signup', expressAsyncHandler(async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        mobile: req.body.mobile
    })

    const user = await newUser.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        isAdmin: user.isAdmin,
        token: generateToken(user)
    });
}))

userRouter.put(
    '/profile',
    expressAsyncHandler(async (req, res) => {

        // console.log(req)
      const user = await User.findOne({email: req.body.userCurrentEmail});
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
  
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    })
  );

export default userRouter