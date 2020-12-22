const add =(a,b) => a+b;

test("1 is 1", () => {
    expect(add(5,6)).toBe(11);
  })