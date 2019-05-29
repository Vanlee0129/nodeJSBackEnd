const Router = require('koa-router')
const user = require('./Controller/user')
const post = require('./Controller/post')
const router = new Router()

const main = ctx => {
    ctx.response.body = 'Hello World'
}

router
    .get('/', main)
    .get('/userInfo', user.getInfo)
    .get('/showNewPost', post.showNewPost)
    .get('/showHotPost', post.showHotPost)

router
    .post('/updatePostLike', post.updatePostLike)
    .post('/isUser', user.isUser)
    .post('/userInfo', user.postInfo)
    .post('/postArticl', post.postArticl)

module.exports = router