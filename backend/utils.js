import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.name,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: '50d'
    })
}