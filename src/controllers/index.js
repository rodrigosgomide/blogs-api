const login = require('./login.controller');
const userController = require('./users.controller');
const categoryController = require('./categories.controller');
const postController = require('./posts.controller');

module.exports = {
    login,
    userController,
    categoryController,
    postController,
};