import * as Vec2 from 'vector2d'
import { Vector } from 'vector2d';
import drawCircle from '../util/circle';
import Color from '../util/color';
import Drawing from './drawing';

/**
 * Core entity class, all objects within the game field are entities.
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
   * Colour of the pen
   *
   * @return  {Color}  Colour object that the entity will be drawn as.
   */
  color: Color = new Color(0, 0, 0);

  /**
   * Size of the pen
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
   * Sets Color
   *
   * @param   {Color}  color  Color to set on the entity
   *
   * @return  {void}
   */
  public setColor(color: Color): void {
    this.color = color;
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


  public process(gametime: number): void {

  }

  /**
   * Draw the entity
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   *
   * @return  {void}                               [return description]
   */
  public abstract draw(context: CanvasRenderingContext2D): void;


  /**
   * Update th entity
   *
   * @param   {Vector}  location  [location description]
   *
   * @return  {void}              [return description]
   */
  public abstract update(location: Vector): void;

}
