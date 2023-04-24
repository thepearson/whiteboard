import { Vector } from "vector2d";
import { Constants } from "../constants";
import { flattenPoints, expandPoints, getCurvePoints, simplify } from "../util/points";
import Color from "../util/color";
import { denormalize, normalize } from "../util/normalize";
import Entity from "./entity";

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
   * @param   {number}  size   Size of the entity
   * @param   {Color}   color  Color of the entity
   */
  constructor(size: number, color: Color) {
    super('freehand')
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
    const simplified = simplify(this.points);
    const flat: Array<number> = flattenPoints(simplified);
    const curved = getCurvePoints(flat);
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
    for (var i = 1; i < this.points.length; i++) {

      // Denmormalise current point to pixel values
      const denormalized = denormalize(this.points[i], context.canvas.width, context.canvas.height);

      // Draw a line to the second point this.points[1] 
      // and continue to the next one.
      if (i === 1) {
        context.lineTo(denormalized.x, denormalized.y);
        continue;
      }

      // If there's more than 2 points and the current point isn't the last one...
      if (this.points.length > 2 && i < (this.points.length - 1)) {

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
  public drawGuides(context: CanvasRenderingContext2D): void {

    const size = 10;

    // If there's nothing to draw, shorcircuit.
    if (this.points.length < 1) return;

    for (var i = 1; i < this.points.length; i++) {
      const vector = denormalize(this.points[i], Constants.CANVAS_SIZE.width, Constants.CANVAS_SIZE.height);
      context.beginPath();
      context.strokeStyle = "#8888FF";
      context.lineWidth = 1;
      context.rect(vector.x - (size / 2), vector.y - (size / 2), size, size);
      context.stroke();
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

}