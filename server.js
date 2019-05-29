// 引入Koa
const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('./router')
const sequelize = require('./config/connectDB')

const app = new Koa()

app.use(koaBody({
    multipart: true
}))
app.use(router.routes())
app.use(router.allowedMethods())


// 启动服务
app.listen(3000, () => {
    console.log('start listening 3000')
})