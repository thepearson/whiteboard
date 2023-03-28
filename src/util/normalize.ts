import { Vector } from "vector2d";

export function normalize(position: Vector, width: number, height: number): Vector {
  return new Vector(((100. / width) * position.x) / 100., ((100. / height) * position.y) / 100.);
}

export function denormalize(position: Vector, width: number, height: number): Vector {
  return new Vector(position.x * width, position.y * height);
}