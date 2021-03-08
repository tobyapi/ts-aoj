import * as aoj from "../src/index"

test("get user", async () => {
  const tobias = await aoj.user.get("tobias")
  expect(tobias.data.id).toBe("tobias")
  expect(tobias.data.registerDate).toBe(1455446055269)
  expect(tobias.data.defaultProgrammingLanguage).toBe("C++")
});
