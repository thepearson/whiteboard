import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "../drawing";
import Entity from "../entities/entity";
import Freehand from "../entities/freehand";
import Tool from "./tool";

export default class Select extends Tool {
  
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

  }

  /**
   * Returns the entity this `Tool` creates.
   *
   * @return  {Entity}  The entity to be added to the layer
   */
  public getEntity(): Entity {
    const color = this.drawing.getColor();
    return new Freehand(this.size, color);
  }
  
}
