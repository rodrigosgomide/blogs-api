const express = require('express');
const { userController } = require('../controllers');
const validateJWT = require('../midlewares/validateJWT');

const router = express.Router();

router.post('/', userController.registerUser);
router.get('/', validateJWT, userController.getAllUsers);
router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;