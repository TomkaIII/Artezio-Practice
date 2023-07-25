const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Employees = sequelize.define('employee',{
    id: {type: DataTypes.INTEGER, primaryKey: true, authoIncrement:true},
    FCs: {type: DataTypes.STRING, allowNull : false},
    Technology: {type: DataTypes.STRING, allowNull : false},
    Worksplace: {type: DataTypes.INTEGER, allowNull : true},
    Position: {type: DataTypes.STRING, allowNull : false},
    EmployedSince: {type: DataTypes.DATE, allowNull : true},
})

const Worksplace = sequelize.define('worksplace',{
    id: {type: DataTypes.INTEGER, primaryKey: true, authoIncrement:true},
    Room: {type: DataTypes.INTEGER, allowNull : false},
    WorksplaceNum: {type: DataTypes.INTEGER, allowNull : false},
})

Worksplace.hasOne(Employees)
Employees.belongsTo(Worksplace)

module.exports = {
    Employees,
    Worksplace,
}