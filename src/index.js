const ClassToTest = require('./ClassToTest')
const ClassToMock = require('./ClassToMock')

const classToTest = new ClassToTest({ key: { ClassToMock } })

console.log(classToTest.instance.foo)
