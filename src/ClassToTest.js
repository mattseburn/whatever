class ClassToTest {
  constructor(obj) {
    this.obj = obj

    this._doStuff()
  }

  _doStuff() {
    console.log('this.obj.key:', this.obj.key)
    console.log('this.obj.key.ClassToMock', this.obj.key.ClassToMock)
    this.instance = new this.obj.key.ClassToMock('bar')
    console.log('instance:', this.instance)
  }
}

module.exports = ClassToTest
