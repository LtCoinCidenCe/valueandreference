let { m, obj1 } = require('./module1')

let n = 3

m = 6

obj1.queue = 'modified'

const func2 = () => {
  console.log('this is func2')
}

module.exports = { n, obj1, func2 }
