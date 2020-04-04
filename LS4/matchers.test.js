test('toBe', () => {
  // toBe 匹配器 matchers
  const a = '{ one: 1 }'
  expect(a).toBe('{ one: 1 }');
})

test('toEqual', () => {
  // toEqual 匹配器
  // 测试对象内容相等
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 });

  // toBeNull
  const b = null
  expect(b).toBeNull();
})

test('toBeDefined', () => {
  // toEqual 匹配器
  const a = !undefined
  expect(a).toBeDefined();
})

test('toBeTruthy', () => {
  // toBeTruthy 匹配器
  const a = 1
  expect(a).toBeTruthy();
}) 

test('toBeFalsy', () => {
  // toBeFalsy 匹配器
  const a = 0
  expect(a).toBeFalsy();
}) 

test('not', () => {
  // not 匹配器
  const a = 1
  expect(a).not.toBeFalsy();
}) 

// 数字相关匹配器
test('toBeGreaterThan', () => {
  // toBeGreaterThan 匹配器
  const a = 10
  expect(a).toBeGreaterThan(2);
}) 

test('toBeLessThan', () => {
  // toBeLessThan 匹配器
  const a = 10
  expect(a).toBeLessThan(11);
}) 

// toBeGreaterThanOrEqual
// toBeLessThanOrEqual

test('toBeCloseTo', () => {
  const num1 = 0.1;
  const num2 = 0.2;
  expect(num1 + num2).toBeCloseTo(0.3);
}) 

// String
test('toMatch', () => {
  const str = 'junxio.com';
  expect(str).toMatch('junxio');
}) 

// Array, Set
test('toContain', () => {
  const arr = ['js', 'jx', 'jxz'];
  const data = new Set(arr)
  expect(data).toContain('jxz');
}) 

// 异常
const throwNewErrorFunc = () => {
  throw new Error('this is a new Error')
}
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow('this is a new Error');
})