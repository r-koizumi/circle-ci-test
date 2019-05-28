import { head } from "../src/sample";

test("get head of array", () => {
  expect(head([1, 2, 3])).toBe(1);
});
