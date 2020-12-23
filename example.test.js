const dice = require("./lectureProblem/daehee/dicegame.js")

test("1 is 1", () => {
  expect(dice.diceGame(3)).toBe("71 32")
})