import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "../drawing";
import Entity from "../entities/entity";
import Freehand from "../entities/freehand";
import Tool from "./tool";
import Rect from "../entities/rect";

export default class Rectangle extends Tool {
  
  /**
   * Sets up marker
   */
  constructor(drawing: Drawing) {
    super(drawing, 'rectangle');
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
    if (this.active_entity) {
      this.active_entity.add(this.location)
    }
  }

  /**
   * Returns the entity this `Tool` creates.
   *
   * @return  {Entity}  The entity to be added to the layer
   */
  public getEntity(drawing: Drawing): Entity {
    const color = this.drawing.getColor();
    return new Rect(this.size, color, this.drawing);
  }
  
}
