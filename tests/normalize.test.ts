import {normalize, denormalize} from '../src/util/normalize';
import { Vector } from 'vector2d';

test("Normalize is within range", () => {
  const normalized = normalize(new Vector(1288, 644), 1980, 1080);
  expect(normalized.x).toBeLessThanOrEqual(1.0)
  expect(normalized.x).toBeGreaterThanOrEqual(0.0)

  expect(normalized.y).toBeLessThanOrEqual(1.0)
  expect(normalized.y).toBeGreaterThanOrEqual(0.0)
});

test("Normalize supports out of bounds values", () => {
  const normalized = normalize(new Vector(2000, 5000), 1000, 500);
  expect(normalized.x).toBeGreaterThan(1.0)
  expect(normalized.y).toBeGreaterThan(1.0)
});

test("Normalize is accurate", () => {
  const normalized = normalize(new Vector(1000, 500), 2000, 1000);
  expect(normalized.x).toEqual(0.5)
  expect(normalized.y).toEqual(0.5)
});

test("Normalize is accurate with precision", () => {
  const normalized = normalize(new Vector(1288, 644), 1980, 1080);
  expect(normalized.x).toEqual(0.6505050505050505)
  expect(normalized.y).toEqual(0.5962962962962962)
});

test("Denomalize is accurate", () => {
  const normalized = denormalize(new Vector(0.5, 0.25), 2000, 1000);
  expect(normalized.x).toEqual(1000)
  expect(normalized.y).toEqual(250)
});

test("Denomalize is accurate with precision", () => {
  const normalized = denormalize(new Vector(0.3333333333333333, 0.3333333333333333), 1980, 1080);
  expect(normalized.x).toEqual(660)
  expect(normalized.y).toEqual(360)
});

test("Denomalize supports out of bounds values", () => {
  const normalized = denormalize(new Vector(1.25, 1.8), 2000, 1000);
  expect(normalized.x).toEqual(2500)
  expect(normalized.y).toEqual(1800)
});