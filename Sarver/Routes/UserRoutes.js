const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../Controller/UserController');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 4 }).withMessage('First name must be at least 4 characters long'),
    body('password').isLength({ min: 7 }).withMessage('Password must be at least 7 characters long')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)
router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)
module.exports = router;