const express = require('express');
const { postController } = require('../controllers');
const validateJWT = require('../midlewares/validateJWT');

const router = express.Router();

router.post('/', validateJWT, postController.registerPost);
// router.get('/', validateJWT, postController.getAllCategories);
// router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;