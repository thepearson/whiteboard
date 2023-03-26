import { Vector } from "vector2d";
import drawCircle from "../util/circle";
import Color from "../util/color";
import Entity from "./entity";

export default class Freehand extends Entity {

  points: Array<Vector> = [];

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

    context.beginPath();
    context.lineWidth = this.size;
    context.strokeStyle = this.color.getHex(false);
    context.fillStyle = this.color.getHex(false);
    context.lineCap = "round";
    context.moveTo(this.points[0].x, this.points[0].y);

    for (var i = 0; i < this.points.length; i++) {
      context.lineTo(this.points[i].x, this.points[i].y);
    }
    context.stroke();

    // for (let point of this.points) {
    //   drawCircle(context, point, this.color, this.size);
    // }
  }

  /**
   * [update description]
   *
   * @param   {Vector}  location  [location description]
   *
   * @return  {void}              [return description]
   */
  public update(location: Vector): void {
    this.points.push(location);
  }

}