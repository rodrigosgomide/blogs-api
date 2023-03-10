const express = require('express');
const { postController } = require('../controllers');
const validateJWT = require('../midlewares/validateJWT');

const router = express.Router();

router.post('/', validateJWT, postController.registerPost);
router.get('/', validateJWT, postController.getAllPosts);
router.get('/:id', validateJWT, postController.getPostById);
router.put('/:id', validateJWT, postController.updatePost);

module.exports = router;