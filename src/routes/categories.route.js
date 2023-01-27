const express = require('express');
const { categoryController } = require('../controllers');
const validateJWT = require('../midlewares/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryController.registerCategory);
router.get('/', validateJWT, categoryController.getAllCategories);
// router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;