module.exports = ( sequelize, DataTypes ) => {
    const gucci = sequelize.define('gucci', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return gucci
}