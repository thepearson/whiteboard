import { Vector } from "vector2d";

export default abstract class HudItem {

  /**
   * If this hud item has a mouse over it.
   */
  hovered: boolean = false;

  /**
   * [description]
   */
  bounding_box: Array<Vector> = [];

  /**
   * The name of the HudItem
   */
  name: string;

  /**
   * Hud Items need a name
   *
   * @param   {string}  name  The name for the item
   *
   * @return  {[type]}
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Inheriting class should own it's own rendering
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas context
   *
   * @return  {void}
   */
  public abstract render(context: CanvasRenderingContext2D): void;

  /**
   * Returns two vectors, top l
   *
   * @return  {Array<Vector>}
   */
  public getBounds(): Array<Vector> {
    return this.bounding_box;
  };

  /**
   * Returns two vectors, top l
   *
   * @return  {Array<Vector>}
   */
  public setBounds(start: Vector, end: Vector): void {
    this.bounding_box = [
      start,
      end
    ];
  };

  /**
   * Called when the mouse enters the bounds of the UI
   *
   * @return  {<void>}
   */
  public abstract handleMouseEnter(position: Vector): void;

  /**
   * Called when the mouse leaves the hud items
   *
   * @param   {Vector}  position 
   *
   * @return  {void}
   */
  public abstract handleMouseLeave(position: Vector): void;

  /**
   * What to do when the mouse clicks inside the element
   *
   * @param   {Vector}  position
   *
   * @return  {void}
   */
  public abstract handleMouseClick(position: Vector): void;
}