module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', 
      {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true
        },
        name:{
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false, underscored:true, tableName: 'categories' }
    );
  
    return Category;
  };

