const userInfo = require('../Service/userInfo')
async function getInfo(ctx) {
    let data = await userInfo.queryUserInfo()
    ctx.body = {
        code: '200',
        data
    }
}

async function postInfo(ctx) {
    let data = ctx.request.body
    await userInfo.insertInfo(data.user_id, data.schoolName, data.sex)
    let result = {
        code: '200',
        message: 'ok'
    }
    ctx.body = result
}

async function isUser(ctx) {
    let data = ctx.request.body
    let result = await userInfo.isExist(data.user_id)
    ctx.body = {
        code: '200',
        result
    }
}

module.exports = {
    getInfo,
    postInfo,
    isUser
}