module.exports = ( sequelize, DataTypes ) => {
    const sty = sequelize.define('sty', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return sty
}