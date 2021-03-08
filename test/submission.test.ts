import * as aoj from '../src/index'

test("get submissions", async () => {
  const response = await aoj.submission.getRecent()
  expect(response.status).toBe(200)
});
  

test("get source code", async () => {
  const response = await aoj.submission.getSourceCode(5263666)
  expect(response.status).toBe(200)
});
  