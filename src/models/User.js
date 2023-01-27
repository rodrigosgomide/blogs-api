module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', 
      {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        displayName: DataTypes.STRING,
        email: {
          unique: true,
          type: DataTypes.STRING
        },
        password: DataTypes.STRING,
        image: DataTypes.STRING
      },
      { timestamps: false, underscored:true, tableName: 'users' }
    );
  
    return User;
  };

