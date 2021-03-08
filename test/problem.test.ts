import * as aoj from '../src/index'

  test("get problem", async () => {
    const response = await aoj.problem.filters()
    expect(response.status).toBe(200)
  });
  