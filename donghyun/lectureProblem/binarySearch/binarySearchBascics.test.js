const binarySearch = require ('./binarySearchBascics');

test("testCase1", () => {
    expect(binarySearch(s)).toBe(3);
  })
  test("testCase1", () => {
    expect(binarySearch("7 0\n0 0 0 0 0 0 0")).toBe(1);
  })