const uuid = require('uuid')

let createId = () => {
    return new Promise(resolve => {
        let id = uuid.v1()
        resolve(id)
    })
}

module.exports = {createId}