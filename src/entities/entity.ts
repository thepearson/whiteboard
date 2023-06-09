import * as Vec2 from 'vector2d'
import { Vector } from 'vector2d';
import drawCircle from '../util/circle';
import Color from '../util/color';
import Drawing from '../drawing';

/**
 * Core entity class, all drawn objects within the app are entities.
 */
export default abstract class Entity {

  /**
   * Time the entity was created, milliseconds since EPOC
   */
  id: number = 0;

  /**
   * Time the entity was created, milliseconds since EPOC
   */
  created: number = 0;

  /**
   * Time the entity was finished drawing, milliseconds since EPOC
   */
  completed: number = 0;

  /**
   * Colour of the entity
   *
   * @return  {Color}  Colour object that the entity will be drawn as.
   */
  stroke_color: Color = new Color(0, 0, 0);

  /**
   * Colour of the entity
   *
   * @return  {Color}  Colour object that the entity will be drawn as.
   */
  fill_color: Color = new Color(0, 0, 0);

  /**
   * Size of the entity
   */
  size: number = 0;

  /**
   * A name for the entity, aka type. Can be used to query for eneities of "name"
   */
  name: string = '';

  /**
   * If set to true the entity will be disposed of next tick.
   */
  remove: boolean = false;

  /**
   * Ref to the drawing canvs
   */
  drawing: Drawing | null = null;


  /**
   * @param   {string}  name  name or type of entity
   */
  constructor(name: string) {
    this.name = name;
    this.created = Date.now();
  }

  /**
   * Sets Stroke Color
   *
   * @param   {Color}  color  Color to set on the entity
   *
   * @return  {void}
   */
  public setStrokeColor(color: Color): void {
    this.stroke_color = color;
  }

  /**
   * Sets Fill Color
   *
   * @param   {Color}  color  Color to set on the entity
   *
   * @return  {void}
   */
  public setFillColor(color: Color): void {
    this.fill_color = color;
  }

  /**
   * Render the entity, by default all entities are treated as circles.
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public render(context: CanvasRenderingContext2D): void {
    this.draw(context);
  }

  /**
   * Process any entity updates or calculations to be rendered next tick.
   *
   * @param   {number}  delta  time since last frame.
   *
   * @return  {void}
   */
  public process(delta: number): void {

  }


  /**
   * Function to call when drawing is complete.
   *
   * @return  {<void>} 
   */
  public complete(): void {
    this.completed = Date.now();
  }

  /**
   * Abstract: Draw the entity, to be implemented by the inheriting class.
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}                               [return description]
   */
  public abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * Abstract: Draw the entity, to be implemented by the inheriting class.
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}                               [return description]
   */
  public abstract drawGuides(context: CanvasRenderingContext2D, target: Vector): void;

  /**
   * Update the entity
   *
   * @param   {Vector}  location  [location description]
   *
   * @return  {void}              [return description]
   */
  public abstract add(location: Vector): void;

  /**
   * Returns a vector if intersected, void if otherwise.
   *
   * @param   {Vector}  position  [position description]
   *
   * @return  {Vector}            [return description]
   */
  public abstract getIntercetingVector(position: Vector): Vector | void;

  /**
   * [abstract description]
   *
   * @return  {Array<Vector><|>}[return description]
   */
  public abstract getBoundingBox():  Array<Vector> | void;

  /**
   * Move an entity
   *
   * @param   {Vector}  vector  [vector description]
   *
   * @return  {void}            [return description]
   */
  public abstract moveEntity(vector: Vector): void;

  /**
   * [abstract description]
   *
   * @return  {void}    [return description]
   */
  public abstract isPointOver(context: CanvasRenderingContext2D, pointer: Vector): boolean | void;
}
