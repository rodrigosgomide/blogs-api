module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', 
      {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
      },
      { timestamps: false, underscored:true, tableName: 'categories' }
    );
  
    return Category;
  };

