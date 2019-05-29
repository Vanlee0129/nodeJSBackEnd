const Sequelize = require('sequelize');
const user = require('../models/user')
const post = require('../models/post')
const photo = require('../models/photo')
const comments = require('../models/comments')
const collection = require('../models/collection')
const sequelize = require('../config/connectDB')

const User = user(sequelize, Sequelize)
const Post = post(sequelize, Sequelize)
const Photo = photo(sequelize, Sequelize)
const Comments = comments(sequelize, Sequelize)
const Collection = collection(sequelize, Sequelize)

module.exports = {
    User,
    Post,
    Photo,
    Comments,
    Collection
}