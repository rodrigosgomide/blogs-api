module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', 
    { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING
        },
        content: {
          allowNull: false,
          type: DataTypes.STRING
        },
        userId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        published: {
          type: DataTypes.DATE
        },
        updated: {
          type: DataTypes.DATE
        }
      },
      { createdAt: "published",updatedAt: "updated", underscored:true, tableName: 'blog_posts' }
    );

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
            {foreignKey: 'userId', as: 'user'})
    }
  
    return BlogPost;
  };

