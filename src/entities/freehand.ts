import { Vector } from "vector2d";
import { Constants } from "../constants";
import drawCircle from "../util/circle";
import Color from "../util/color";
import { denormalize, normalize } from "../util/normalize";
import Entity from "./entity";

export default class Freehand extends Entity {

  points: Array<Vector> = [];

  scale: number = 1.0;

  constructor(size: number, color: Color) {
    super('freehand')
    this.size = size;
    this.color = color;
  }

  /**
   * [draw description]
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}                               [return description]
   */
  public draw(context: CanvasRenderingContext2D): void {
    if (this.points.length < 1) return;

    let scale = this.scale;
    if (context.canvas.width !== Constants.CANVAS_SIZE.width) {
      scale = context.canvas.width / Constants.CANVAS_SIZE.width;
    }
    
    context.beginPath();
    context.lineWidth = this.size * scale;
    context.strokeStyle = this.color.getHex(false);
    context.fillStyle = this.color.getHex(false);
    context.lineCap = "round";

    const initialPoint = denormalize(this.points[0], context.canvas.width, context.canvas.height);
    context.moveTo(initialPoint.x, initialPoint.y);

    for (var i = 1; i < this.points.length; i++) {
      const denormalized = denormalize(this.points[i], context.canvas.width, context.canvas.height);

      if (this.points.length > 2 && i < (this.points.length - 1)) {
        const denomalizedNext = denormalize(this.points[i + 1], context.canvas.width, context.canvas.height);

        var c = (denormalized.x + denomalizedNext.x) / 2;
        var d = (denormalized.y + denomalizedNext.y) / 2;

        context.quadraticCurveTo(denormalized.x, denormalized.y, c, d);
      } else {
        context.lineTo(denormalized.x, denormalized.y);
      }
    }
    context.stroke();
  }

  /**
   * [update description]
   *
   * @param   {Vector}  location  [location description]
   *
   * @return  {void}              [return description]
   */
  public update(location: Vector): void {
    this.points.push(normalize(location, Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height));
  }

}