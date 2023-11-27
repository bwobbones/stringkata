import { Strings } from "./strings";

const strings: Strings = new Strings();

test("test that no args result in 0", () => {
  expect(strings.add()).toBe(0);
});
