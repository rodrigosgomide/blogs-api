const { postService } = require('../services');
const { postCategorieService } = require('../services');

const registerPost = async (req, res, next) => {
    const { id } = req.user;
    const { title, content, categoryIds } = req.body;
    
    try {
        const post = await postService.registerPost({ title, content, id });
        await postCategorieService.registerPostCategories(post.id, categoryIds);
        return res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await postService.getAllUsers();
//         return res.status(200).json(users);
//     } catch (error) {
//         next(error);
//     }
// };

// const getUserById = async (req, res, next) => {
//     const { id } = req.params;
//     try {
//         const user = await postService.getUserById(id);
//         return res.status(200).json(user);
//     } catch (error) {
//         next(error);
//     }
// };

module.exports = {
    registerPost,
};
