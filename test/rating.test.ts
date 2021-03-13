import * as aoj from '../src/index'

test("get rating", async () => {
  const response = await aoj.custom_ranking.contributions()
  expect(response.status).toBe(200)
});
  