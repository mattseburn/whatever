const ClassToTest = require('../ClassToTest')

const mockFoo = '__foo__'
const mockClassToMock = { foo: mockFoo }
const mockObject = {
  key: { ClassToMock: jest.fn(() => mockClassToMock) }
}

describe('', () => {
  it('', () => {
    const classToTest = new ClassToTest(mockObject)

    expect(mockObject.key.ClassToMock).toHaveBeenCalledWith('bar')
    expect(classToTest.instance.foo).toEqual(mockFoo)
  })
})
