import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "../drawing";
import Entity from "../entities/entity";
import Freehand from "../entities/freehand";
import Pen from "./pen";

export default class Marker extends Pen {
  
  /**
   * Construct for marker
   *
   * @return  {Marker}  self
   */
  constructor(drawing: Drawing) {
    super(drawing, 'marker');
  }

  /**
   * [draw description]
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {[type]}                             [return description]
   */
  public draw(context: CanvasRenderingContext2D) {
    if (this.active_entity) {
      this.active_entity.add(this.location)
    }
  }

  
  public getEntity(): Entity {
    const color = this.drawing.getColor();
    return new Freehand(this.size, color);
  }
}
