import { Vector } from 'vector2d';
import Freehand from '../src/entities/freehand'
import Color from '../src/util/color'
import Random from '../src/util/random'

test("Freehand default properties are set correctly", () => {
  const freehand = new Freehand(10, new Color(255, 255, 0));
  expect(freehand.name).toBe("freehand");
  expect(freehand.created).toBeGreaterThan(0);
  expect(freehand.size).toEqual(10);
  expect(freehand.scale).toEqual(1.0);
})

test("Freehand accepts points, and points lenght is consistant", () => {
  const freehand = new Freehand(10, new Color(255, 255, 0));
  for (let i = 0; i < 10000; i++) {
    freehand.add(new Vector(Random.int(0, 1920), Random.int(0, 1080)))
  }
  expect(freehand.points.length).toEqual(10000)
})