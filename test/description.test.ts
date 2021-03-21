import * as aoj from '../src/index'

  test("get problem", async () => {
    //const response = await aoj.problem.filters()
    const response = await aoj.description.getByProblemId("en", "0513")
    expect(response.status).toBe(200)
  });
  