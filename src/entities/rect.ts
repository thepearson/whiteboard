import { Vector } from "vector2d";
import { Constants } from "../constants";
import { flattenPoints, expandPoints, getCurvePoints, simplify } from "../util/points";
import Color from "../util/color";
import { denormalize, normalize } from "../util/normalize";
import Entity from "./entity";
import Drawing from "../drawing";
import { drawBoundingBox, drawGuide } from "../util/guide";

export default class Rect extends Entity {

  /**
   * Points of the freehand line
   * 
   * @var {Array<Vector>} 
   */
  points: Array<Vector> = [];

  /**
   * 
   */
  origin: Vector | null = null;

  /**
   * [description]
   */
  destination: Vector | null = null;

  /**
   * Enables the entity to be scaled and displayed at 
   * a different size, ie in the layers overview.
   * 
   * @var {number}
   */
  scale: number = 1.0;

  rotation: number = 0.01;

  /**
   * @param   {number}  size   Size of the entity
   * @param   {Color}   color  Color of the entity
   */
  constructor(size: number, color: Color, drawing: Drawing) {
    super('rect')
    this.drawing = drawing;
    this.size = size;
    this.color = color;
  }


  /**
   * [complete description]
   *
   * @return  {void}    [return description]
   */
  public complete(): void {
    super.complete();
  }

  /**
   * Draw this entity to the given context. Contains all the 
   * logic to draw a freehand line onto a context.
   *
   * @param   {CanvasRenderingContext2D}  context  The canvas context to draw this entity to.
   *
   * @return  {void}
   */
  public draw(context: CanvasRenderingContext2D): void {

    // If there's nothing to draw, shorcircuit.
    if (this.origin && this.destination) {

      const origin = denormalize(this.origin, context.canvas.width, context.canvas.height);
      const destination = denormalize(this.destination, context.canvas.width, context.canvas.height);
      
      // Set the scale to equal the default
      let scale = this.scale;

      // Caculate the scale based on the size of the canvas context's canvas
      if (context.canvas.width !== Constants.CANVAS_SIZE.width) {
        scale = context.canvas.width / Constants.CANVAS_SIZE.width;
      }
      
      // Draw
      context.beginPath();
      context.lineWidth = this.size * scale;

      context.strokeStyle = this.color.getHex(false);
      context.fillStyle = this.color.getHex(false);

      context.lineCap = "round";
      context.rect(origin.x, origin.y, -(origin.x - destination.x), -(origin.y - destination.y));
      context.stroke();
    }
  }

  /**
   * Draws tool guides
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}                               [return description]
   */
  public drawGuides(context: CanvasRenderingContext2D, target: Vector): void {
    if (this.origin && this.destination) {
      drawGuide(context, denormalize(this.origin, context.canvas.width, context.canvas.height), target);
      drawGuide(context, denormalize(this.destination, context.canvas.width, context.canvas.height), target);
    }

    const boundingBox = this.getBoundingBox() as Array<Vector>;
    drawBoundingBox(boundingBox[0], boundingBox[1], context);
  }

  /**
   * Add a point to the canvas
   *
   * @param   {Vector}  location  [location description]
   *
   * @return  {void}
   */
  public add(location: Vector): void {

    const point = normalize(location, Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height);

    if (!this.origin) {
      this.origin = point;
    } else {
      this.destination = point;
    }
  }

  /**
   * Check if we're intersecting a vector
   *
   * @param   {Vector}  position  [position description]
   *
   * @return  {void}              [return description]
   */
  public getIntercetingVector(position: Vector): void | Vector {
    const size = Constants.GUIDE_SIZE;
    if (this.origin && this.destination) {
      const denormal_origin = denormalize(this.origin, Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height);

      if (position.x > (denormal_origin.x - (size / 2)) && 
        position.x < ((denormal_origin.x - (size / 2)) + size) && 
        position.y > (denormal_origin.y - (size / 2)) && 
        position.y < ((denormal_origin.y - (size / 2)) + size)) {
        return this.origin;
      }

      const denormal_destination = denormalize(this.destination, Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height);
      if (position.x > (denormal_destination.x - (size / 2)) && 
        position.x < ((denormal_destination.x - (size / 2)) + size) && 
        position.y > (denormal_destination.y - (size / 2)) && 
        position.y < ((denormal_destination.y - (size / 2)) + size)) {
        return this.destination;
      }
    }
  }

  public getBoundingBox(): void | Vector[] {
    if (this.origin && this.destination) return [this.origin, this.destination];
    return;
  }

}