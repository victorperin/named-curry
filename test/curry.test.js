describe('Named curry', () => {
  const namedCurry = require('../src/index')

  it('should execute { a, b }', () => {
    const func = (a, b) => a + b
    const curriedFunc = namedCurry(func)

    const result = curriedFunc({ a: 1, b: 2 })

    expect(result).toBe(3)
  })

  it('should execute { a }{ b }', () => {
    const func = (a, b) => a + b
    const curriedFunc = namedCurry(func)

    const result = curriedFunc({ a: 1 })({ b: 2 })

    expect(result).toBe(3)
  })

  it('should execute { a }{ b }, if object params function', () => {
    const func = ({a, b}) => a + b
    const curriedFunc = namedCurry(['a', 'b'], func)

    const result = curriedFunc({ a: 1 })({ b: 2 })

    expect(result).toBe(3)
  })
})
