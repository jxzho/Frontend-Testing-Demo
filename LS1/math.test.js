// var result = add(3, 7);
// var expected = 10;

// if (result !== 10) {
//   throw Error(`3 + 7 should be ${expected}, but get ${result}`)
// }

// var result = minus(3, 3);
// var expected = 0;

// if (result !== 0) {
//   throw Error(`3 - 3 should be ${expected}, but get ${result}`)
// }

function expect (result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期值和实际值不相等, 预期${actual}, 结果却是${result}`)
      }
    }
  }
}

function test (desc, fn) {
  try {
    fn();
    console.log(`${desc} 通过测试`);
  } catch (err) {
    console.log(`${desc} 没有通过测试 ${err}`);
  }
}

test('测试加法 3 + 7', () => {
  expect(add(3, 3)).toBe(6);
})

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0);
})

test('测试乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9);
})