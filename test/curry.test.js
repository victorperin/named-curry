describe('Named curry', () => {
  const namedCurry = require('../src/index')

  it('should curry { a, b }', () => {
    const func = ({ a, b }) => a + b
    const curriedFunc = namedCurry(func)

    const result = func({ a: 1 })({ b: 2 })

    expect(result).toBe(3)
  })
})
