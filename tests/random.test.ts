import Random from '../src/util/random'

test("Consecutive random numbers aren't equal", () => {
  expect(Random.int() === Random.int()).toBeFalsy()
});