const post = require('../Service/postArticls')
async function showNewPost(ctx) {
    let data = await post.queryAllNewPost()
    ctx.body = {
        code: '200',
        data
    }
}

async function showHotPost(ctx) {
    let data = await post.queryAllHotPost()
    ctx.body = {
        code: '200',
        data
    }
}

async function postArticl(ctx) {
    let data = ctx.request.body
    await post.insertPost(data.userName, data.avatarUrl, data.content, data.user_id)
    let result = {
        code: '200',
        message: 'ok'
    }
    ctx.body = result
}

async function updatePostLike(ctx) {
    let data = ctx.request.body
    await post.updatePost(data.postId, data.likeNum)
    let result = {
        code: '200',
        message: 'ok'
    }
    ctx.body = result
}

module.exports = {
    postArticl,
    showNewPost,
    showHotPost,
    updatePostLike
}