import * as aoj from '../src/index'

  test("get problem", async () => {
    const response = await aoj.problem.filters()
    expect(response.status).toBe(200)
  });
  
  test("get all", async () => {
    const response = await aoj.problem.all(3, 10)
    expect(response.status).toBe(200)
  });
  