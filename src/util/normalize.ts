import { Vector } from "vector2d";

/**
 * Normalize a vector. Takes a vector and a source width and height
 * then normalizes it to fall within the range of 0.0 - 1.0 relative
 * to the source's with and height. Effectively becoming a percentage
 * of the target, instead of exact values.
 *
 * @param   {Vector}  vector            The vector to normalize
 * @param   {number}  source_width      The source width
 * @param   {number}  source_height     The source height
 *
 * @return  {Vector}                    Normalized vector containing xy values between 0.0 and 1.0
 */
export function normalize(vector: Vector, source_width: number, source_height: number): Vector {
  return new Vector(((100. / source_width) * vector.x) / 100., ((100. / source_height) * vector.y) / 100.);
}

/**
 * Takes a normalized vector (xy with values 0.0 - 1.0) and maps it 
 * to the targets dimentions (ie pixel values)
 *
 * @param   {Vector}  normalized_vector   The vector to denomalize
 * @param   {number}  target_width        The target width
 * @param   {number}  target_height       The target height
 *
 * @return  {Vector}                      A denomalized vector conaining xy values between 0 and target_width/height
 */
export function denormalize(normalized_vector: Vector, target_width: number, target_height: number): Vector {
  return new Vector(normalized_vector.x * target_width, normalized_vector.y * target_height);
}