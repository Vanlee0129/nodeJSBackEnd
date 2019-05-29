const config = require('./config')

let insertInfo = async (user_id, schoolName, sex) => {
    await config.User.create({
        user_id: user_id,
        school_name: schoolName,
        sex: sex
    })
}

let queryUserInfo = async () => {
    let query = await config.User.findAll()
    let date = []
    for (const i in query) {
        date.push(query[i].dataValues)
    }
    return date
}

let isExist = async userId => {
    let result = await config.User.findOne({
        where: {
            user_id: userId
        }
    })
    return result
}

module.exports = {
    insertInfo,
    queryUserInfo,
    isExist
}