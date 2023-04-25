import { Vector } from "vector2d";
import { Constants } from "../constants";
import { flattenPoints, expandPoints, getCurvePoints, simplify } from "../util/points";
import Color from "../util/color";
import { denormalize, normalize } from "../util/normalize";
import Entity from "./entity";
import Select from "../tools/select";
import Drawing from "../drawing";
import { drawBoundingBox, drawGuide }  from "../util/guide";

export default class Freehand extends Entity {

  /**
   * Points of the freehand line
   * 
   * @var {Array<Vector>} 
   */
  points: Array<Vector> = [];

  /**
   * Enables the entity to be scaled and displayed at 
   * a different size, ie in the layers overview.
   * 
   * @var {number}
   */
  scale: number = 1.0;

  
  /**
   * Do we close this shape?
   */
  close: boolean;

  /**
   * @param   {number}  size   Size of the entity
   * @param   {Color}   color  Color of the entity
   */
  constructor(size: number, color: Color, drawing: Drawing, close: boolean = false) {
    super('freehand')
    this.close = close;
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

    if (this.points.length < 1) return;
    const simplified = simplify(this.points, 3);
    const flat: Array<number> = flattenPoints(simplified);
    const curved = getCurvePoints(flat, 0.7, 1, this.close);
    this.points = expandPoints(curved);
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
    if (this.points.length < 1) return;

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


    // We denormalize the points, based on the canvas size and scale.
    const initialPoint = denormalize(this.points[0], context.canvas.width, context.canvas.height);

    // Move the turtle to this.points[0]
    context.moveTo(initialPoint.x, initialPoint.y);

    // Start at the second point `this.points[1]`
    for (var i = 0; i < this.points.length; i++) {

      // Denmormalise current point to pixel values
      const denormalized = denormalize(this.points[i], context.canvas.width, context.canvas.height);

      // If there's more than 2 points and the current point isn't the last one...
      if (this.points.length > 1 && i < (this.points.length - 1)) {

        // Denormalise the next point, so that we can draw a quadratic curve to it
        const denomalizedNext = denormalize(this.points[i + 1], context.canvas.width, context.canvas.height);

        // Calulate the mid-point between current and next points
        var c = (denormalized.x + denomalizedNext.x) / 2;
        var d = (denormalized.y + denomalizedNext.y) / 2;

        // Draw the quadratic curve to this point
        context.quadraticCurveTo(denormalized.x, denormalized.y, c, d);
      } else {
        // Otherwise just draw a simple line
        context.lineTo(denormalized.x, denormalized.y);
      }
    }

    if (this.close) {
      context.closePath();
      context.fill()
    }

    // Stroke it. ԅ(≖⌣≖ԅ)
    context.stroke();
  }

  /**
   * Draws tool guides
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}                               [return description]
   */
  public drawGuides(context: CanvasRenderingContext2D, target: Vector): void {
    // If there's nothing to draw, shorcircuit.
    if (this.points.length > 0) {
      for (var i = 0; i < this.points.length; i++) {
        const vector = denormalize(this.points[i], Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height);
        drawGuide(context, vector, target)
      }

      const boundingBox = this.getBoundingBox() as Array<Vector>;
      drawBoundingBox(boundingBox[0], boundingBox[1], context);
    }
  }

  /**
   * Add a point to the canvas
   *
   * @param   {Vector}  location  [location description]
   *
   * @return  {void}
   */
  public add(location: Vector): void {

    // Points are normalized to x: 0.0 - 1.0, y: 0.0 - 1.0, as using pixel values is restrictive
    this.points.push(normalize(location, Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height));
    
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

    // If there's nothing to draw, shorcircuit.
    if (this.points.length > 0) {
      for (var i = 0; i < this.points.length; i++) {
        const vector = denormalize(this.points[i], Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height);

        const startX = vector.x - (size / 2);
        const startY = vector.y - (size / 2);

        if (position.x > startX && position.x < (startX + size) && position.y > startY && position.y < (startY + size)) {
          return this.points[i];
        }
      }
    }
  }

  /**
   * [getBoundingBox description]
   *
   * @param   {Vector[]}  position  [position description]
   *
   * @return  {void[]}              [return description]
   */
  public getBoundingBox(): void | Vector[] {
    let minX: number = Constants.CANVAS_SIZE.width;
    let minY: number = Constants.CANVAS_SIZE.height;
    let maxX: number = 0;
    let maxY: number = 0;

    for (let point of this.points) {
      if (point.x < minX) minX = point.x;
      if (point.y < minY) minY = point.y;
      if (point.x >= maxX) maxX = point.x;
      if (point.y >= maxY) maxY = point.y;
    }

    return [new Vector(minX, minY), new Vector(maxX, maxY)];
  }

}