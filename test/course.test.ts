import * as aoj from '../src/index'

  test("get problems", async () => {
    const response = await aoj.course.getByClassification("UOA", "UAPC")
    expect(response.status).toBe(200)
  });
  