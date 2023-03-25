import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "./drawing";
import Entity from "./entity";
import Freehand from "./freehand";
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
      this.active_entity.update(this.location)
    }
  }

  
  public getEntity(): Entity {
    const color = this.drawing.pallette?.getColor() ? this.drawing.pallette?.getColor() : new Color(0, 0, 0, 1);
    return new Freehand(this.size, color);
  }
}
