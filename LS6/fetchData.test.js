import { fetchData } from './fetchData'

// test('fetchData 返回结果为 { success: true }', () => {
//   fetchData(data => {
//     expect(data).toEqual({
//       success: true
//     })
//   })
// })

// test('fetchData 返回结果为 404', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => {
//     expect(e.toString().indexOf('404') > -1).toBe(true);
//   })
// })

test('fetchData', () => {
  expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})