import * as aoj from '../src/index'

  test("get solutions", async () => {
    const qq = await aoj.solution.getByUserIdAndProblemId("tobias", "0001");
    const data = qq.data[0];
    expect(data.judgeId).toBe(5265693);
    expect(data.userId).toBe("tobias");
    expect(data.problemId).toBe("0001");
    expect(data.language).toBe("C++");
  });
  