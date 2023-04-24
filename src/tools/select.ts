import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "../drawing";
import Entity from "../entities/entity";
import Freehand from "../entities/freehand";
import Tool from "./tool";
import { Vector } from "vector2d";
import Null from "../entities/null";
import { normalize } from "../util/normalize";
import { Constants } from "../constants";

export default class Select extends Tool {

  /**
   * Currently selected vedctor if any
   * 
   * @var {Vector}
   */
  selected_vector: Vector | null = null;

  /**
   * Sets up marker
   */
  constructor(drawing: Drawing) {
    super(drawing, 'select');
  }

  /**
   * While drawing (mousedown) constantly add the current cursor
   * location to the active entity
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas redering context
   *
   * @return  {void}
   */
  public draw(context: CanvasRenderingContext2D): void {
    const normalized_location = normalize(this.location, context.canvas.width, context.canvas.height);
    if (this.selected_vector) {
      this.selected_vector.x = normalized_location.x;
      this.selected_vector.y = normalized_location.y;
    }
  }

  /**
   * Stops drawing, adds enetity complete time, adds the 
   * entity to the drawing, which will pass it to the 
   * active layerand resets the active entity.
   *
   * @return  {void}
   */
  public stopDrawing(): void {
    super.stopDrawing();
    this.selected_vector = null;
  }

  /**
   * Draw the tool target
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public drawTarget(context: CanvasRenderingContext2D): void {
    // void
  }

  /**
   * Returns the entity this `Tool` creates.
   *
   * @return  {Entity}  The entity to be added to the layer
   */
  public getEntity(drawing: Drawing): Entity {
    const color = this.drawing.getColor();
    return new Null(drawing);
  }
  
}
