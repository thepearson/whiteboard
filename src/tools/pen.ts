import { Vector } from "vector2d";
import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "../drawing";
import Entity from "../entities/entity";

export default abstract class Pen {


  /**
   * Name of the pen
   */
  name: string = '';

  /**
   * Width of the pen
   */
  size: number = 20;

  /**
   * Target Color
   */
  target_color: Color = new Color(128, 128, 255, 0.2);

  /**
   * Location
   */
  location: Vector = new Vector(0, 0);

  /**
   * Is the pen down (drawing)
   */
  is_drawing: boolean = false;


  /**
   * The entity being drawn
   */
  active_entity: Entity | null = null;


  /**
   * Reference to main drawing canvas
   */
  drawing: Drawing;

  /**
   * @param   {string}  name  name or type of entity
   */
  constructor(drawing: Drawing, name: string) {
    this.name = name;
    this.drawing = drawing;
  }

  /**
   * Set's the location of the pen
   *
   * @param   {Vector}  location  Location of the pen
   *
   * @return  {[type]}            void
   */
  public setLocation(location: Vector): void {
    this.location = location;
  }

  /**
   * Start drawing, create the entity etc.
   *
   * @return  {void} 
   */
  public startDrawing(): void {
    this.setIsDrawing(true)
    this.active_entity = this.getEntity();
  }

  /**
   * Sets the size of the pointer brush
   *
   * @param   {number}  size  [size description]
   *
   * @return  {void}          [return description]
   */
  public setSize(size: number): void {
    if (size > 0) this.size = Math.min(size, 100);
  }

  /**
   * Stop drawing, apply the entity
   *
   * @return  {void}    [return description]
   */
  public stopDrawing(): void {
    this.setIsDrawing(false);
    if (this.active_entity) {
      this.active_entity.completed = Date.now();
      this.drawing.addEntity(this.active_entity);
      this.active_entity = null;
    }
  }

  /**
   * Sets the drawing state of the Pen
   *
   * @param   {boolean}  state  Is the pen drawing
   *
   * @return  {[type]}          void
   */
  public setIsDrawing(state: boolean) {
    this.is_drawing = state;
  }

  /**
   * Draw the pen target
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {[type]}                             [return description]
   */
  public drawTarget(context: CanvasRenderingContext2D) {
    drawCircle(context, this.location, this.target_color, this.size)
  }

  /**
   * [draw description]
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {[type]}                             [return description]
   */
  public abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * Function to return the drawn entity
   *
   * @return  {Entity}  an instance of a drawn entity
   */
  public abstract getEntity(): Entity;
}
