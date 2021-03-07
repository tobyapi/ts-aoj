import * as aoj from "../src/index";

test("get user", async () => {
  const tobias = await aoj.user.get("tobias");
  expect(tobias.id).toBe("tobias");
  expect(tobias.registerDate).toBe(1455446055269);
  expect(tobias.defaultProgrammingLanguage).toBe("C++");
});
