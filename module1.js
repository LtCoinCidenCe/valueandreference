const m = '11' // this is not modified as m is passed by value

const obj1 = { queue: 3 }  // this gets modified as obj1 is passed by reference

obj1.queue = 4

async function func1() {
  console.log('this is func1')
}

module.exports = { m, obj1, func1 }
