module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', 
    { 
        postId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        }
      },
      {timestamps: false, underscored:true, tableName: 'posts_categories' }
    );

    PostCategory.associate = (models) => {
        const { BlogPost, Category } = models
        BlogPost.belongsToMany(Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
        Category.belongsToMany(BlogPost, {
          as: 'postId',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
      };
  
    return PostCategory;
  };

