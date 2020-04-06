import Counter from './Counter'

let counter = undefined

// beforeAll(() => {
//   console.log('beforeAll');
// })

// beforeEach(() => {
//   counter = new Counter()
// })

// afterEach(() => {
//   console.log('afterEach');
// })

// afterAll(() => {
//   console.log('afterAll');
// })

describe('测试类 Counter', () => {
  beforeEach(() => {
    counter = new Counter
    console.log('beforeEach');
  })

  describe('测试加法相关代码', () => {
    beforeEach(() => {
      console.log('beforeEach');
    })

    test('测试加法 addOne', () => {
      counter.addOne()
      expect(counter.number).toBe(1)
    })
  })
  
  describe('测试减法相关代码', () => {
    test('测试减法 minusOne', () => {
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
  })
})
