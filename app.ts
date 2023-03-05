@sealed
class Person {
  constructor() {
    console.log('Person')
  }
}

function sealed(target: Function): any {
  target = function() {
    console.log('DECORATORRR', target)
  }
  return target
}

new Person()
