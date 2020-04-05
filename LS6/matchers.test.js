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