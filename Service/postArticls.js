const config = require('./config')
const uuid = require('../utils/uuid')

let insertPost = async (userName, avatarUrl, content, user_id) => {
    let postId = await uuid.createId()
    await config.Post.create({
        avatarUrl: avatarUrl,
        post_id: postId,
        content: content,
        user_name: userName,
        like: 0,
        user_id: user_id,
        status: 1
    })
}

let queryAllNewPost = async () => {
    let query = await config.Post.findAll({
        order: [
            ["createdAt", "DESC"]
        ]
    })
    let data = []
    for (const i in query) {
        data.push(query[i].dataValues)
    }
    return data
}

let queryAllHotPost = async () => {
    let query = await config.Post.findAll({
        order: [
            [
                ["like", "DESC"]
            ]
        ]
    })
    let data = []
    for (const i in query) {
        data.push(query[i].dataValues)
    }
    return data
}

let updatePost = async (postId, likeNum) => {
    await config.Post.update({
        like: likeNum,
    },{
        where: {
            post_id: postId
        }
    })
}

module.exports = {
    insertPost,
    queryAllNewPost,
    queryAllHotPost,
    updatePost
}