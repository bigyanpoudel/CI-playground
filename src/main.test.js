const main = require("./main");

test("should return simple test string", () => {
  const res = main("hello world", 2);
  expect(res).toBe("hello world*2");
});
