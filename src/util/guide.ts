import { Vector } from "vector2d";
import { Constants } from "../constants";
import { denormalize } from "./normalize";

export function drawGuide(context: CanvasRenderingContext2D, pos: Vector, target: Vector): void {
  const size = Constants.GUIDE_SIZE;

  context.beginPath();
  context.lineWidth = 1;
  
  const startX = pos.x - (size / 2);
  const startY = pos.y - (size / 2);

  if (target.x > startX && target.x < (startX + size) && target.y > startY && target.y < (startY + size)) {
    context.strokeStyle = "#000000";
  } else {
    context.strokeStyle = "#8888FF";
  }
  context.rect(startX, startY, size, size);
  context.stroke();
};

/**
 * Draw a bounding box
 *
 * @param   {Vector}                    start    [start description]
 * @param   {Vector}                    end      [end description]
 * @param   {CanvasRenderingContext2D}  context  [context description]
 *
 * @return  {void}                               [return description]
 */
export function drawBoundingBox(start: Vector, end: Vector, context: CanvasRenderingContext2D): void {
  const denorm_start = denormalize(start, context.canvas.width, context.canvas.height);
  const denorm_end   = denormalize(end, context.canvas.width, context.canvas.height);
  
  context.beginPath();
  context.lineWidth = 1;
  context.strokeStyle = "#8888FF";
  context.rect(denorm_start.x, denorm_start.y, (denorm_end.x - denorm_start.x), (denorm_end.y - denorm_start.y));
  context.stroke();
}