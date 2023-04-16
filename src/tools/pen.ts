import { Vector } from "vector2d";
import drawCircle from "../util/circle";
import Color from "../util/color";
import Drawing from "../drawing";
import Entity from "../entities/entity";

export default abstract class Pen {


  /**
   * Name of the pen
   * 
   * @var {string}
   */
  name: string = '';

  /**
   * Width of the pen
   * 
   * @var {number}
   */
  size: number = 20;

  /**
   * Target Color
   * 
   * @var {Color}
   */
  target_color: Color = new Color(128, 128, 255, 0.2);

  /**
   * Location of the Pen
   * 
   * @var {Vector}
   */
  location: Vector = new Vector(0, 0);

  /**
   * Is the pen down (drawing)
   * 
   * @var {boolean}
   */
  is_drawing: boolean = false;

  /**
   * The current entity being drawn
   * 
   * @var {Entity | null}
   */
  active_entity: Entity | null = null;

  /**
   * Reference to main drawing canvas
   * 
   * @var {Drawing}
   */
  drawing: Drawing;

  /**
   * @param   {Drawing}  drawing  Main drawing canvas
   * @param   {string}   name     The name of the Pen
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
   * @return  {void}
   */
  public setLocation(location: Vector): void {
    this.location = location;
  }

  /**
   * Start drawing, create the Pen's `Entity` and 
   * sets it as active.
   *
   * @return  {void} 
   */
  public startDrawing(): void {
    this.setIsDrawing(true)
    this.active_entity = this.getEntity();
  }

  /**
   * Sets the size of the brush/line/stroke
   *
   * @param   {number}  size  Size in pixels of the radius
   *
   * @return  {void}
   */
  public setSize(size: number): void {
    if (size > 0) this.size = Math.min(size, 100);
  }

  /**
   * Stops drawing, adds enetity complete time, adds the 
   * entity to the drawing, which will pass it to the 
   * active layerand resets the active entity.
   *
   * @return  {void}
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
   * @return  {void}
   */
  public setIsDrawing(state: boolean): void {
    this.is_drawing = state;
  }

  /**
   * Draw the pen target
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public drawTarget(context: CanvasRenderingContext2D): void {
    drawCircle(context, this.location, this.target_color, this.size)
  }

  /**
   * Abstract method to be implemented by the tool, how do we draw the thing.
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}
   */
  public abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * Abstract method to return the drawn entity, implemented by the tool
   *
   * @return  {Entity}  an instance of a drawn entity
   */
  public abstract getEntity(): Entity;
}
