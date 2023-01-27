module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', 
      {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true
        },
        displayName:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        email: {
          unique: true,
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type:DataTypes.STRING,
          allowNull: false,
        },
        image: DataTypes.STRING
      },
      { timestamps: false, underscored:true, tableName: 'users' }
    );

    User.associate = (models) => {
      User.hasMany(models.BlogPost,
          {foreignKey: 'userId'})
    }
  
    return User;
  };

