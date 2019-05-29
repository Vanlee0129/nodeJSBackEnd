const Sequelize = require('sequelize');
const user = require('./models/user.js')
const sequelize = require('./config/connectDB.js')

let User = user(sequelize, Sequelize)

async function add(id) {
    await User.create({
        user_id: id
    })
}

async function query() {
    let q = await User.findAll()
    let d = []
    for (const i in q) {
        d.push(q[i].dataValues)
    }
    console.log(d)
}




let anq = async function (id) {
    // let u = await User.create({user_id:id})
    // let f = await User.findAll()
    await add(id)
    await query()
}

anq('iddd')