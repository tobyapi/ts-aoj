import * as aoj from '../src/index'

  test("get available filters", async () => {
    const response = await aoj.commentary.availableFilters("Japanese", "0000")
    expect(response.status).toBe(200)
  });
  