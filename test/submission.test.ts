import * as aoj from '../src/index'

  test("get submissions", async () => {
    const response = await aoj.submission.getRecent();
    expect(response.status).toBe(200);
  });
  