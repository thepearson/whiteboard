import { Vector } from "vector2d";
import { Constants } from "../constants";
import { denormalize } from "./normalize";

export default function drawGuide(context: CanvasRenderingContext2D, pos: Vector, target: Vector): void {
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