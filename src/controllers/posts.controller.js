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

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await postService.getAllPosts();
        return res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

const getPostById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const posts = await postService.getPostById(id);
        return res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerPost,
    getAllPosts,
    getPostById,
};
