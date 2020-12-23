const score = require("./lectureProblem/daehee/calculatingscore.js")

test("1 is 1", () => {
  expect(score.calculatingScore(10)).toBe("71 32")
})