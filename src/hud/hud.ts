import { Vector } from "vector2d";
import HudItem from "./hud_item";

export default class Hud {

  /**
   * Array of items to render for the Hud
   */
  items: Array<HudItem> = [];

  /**
   * If we want the HUD to be visible
   */
  visible: boolean = true;

  /**
   * Position of the mouse
   */
  cursor_position: Vector | null = null;

  /**
   * Call all the render functions of each HudItem
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public render(context: CanvasRenderingContext2D): void {
    // Short circuit if not visible
    if (!this.visible) return;

    // Otherwise render all the HUD items.
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].render(context);
    }
  }

  /**
   * Check for cursor and hud intersects
   *
   * @param   {number}  delta  [delta description]
   *
   * @return  {void}           [return description]
   */
  public process(delta: number): void {
    for (let i = 0; i < this.items.length; i++) {
      const item_box: Array<Vector> = this.items[i].getBounds();
      const [start, end] = item_box;

      if (!this.cursor_position) continue;

      if (this.cursor_position.x > start.x && this.cursor_position.x < end.x && this.cursor_position.y > start.y && this.cursor_position.y < end.y && this.items[i].hovered === false) {
        this.items[i].handleMouseEnter(this.cursor_position);
      } 

      if ((this.cursor_position.x < start.x || this.cursor_position.x > end.x || this.cursor_position.y < start.y || this.cursor_position.y > end.y) && this.items[i].hovered === true) {
        this.items[i].handleMouseLeave(this.cursor_position);
      }
    }
  }

  /**
   * Add an item to the HUD
   *
   * @param   {HudItem}  item  Item that inherits from the HutItem abstract class
   *
   * @return  {void}
   */
  public addItem(item: HudItem): void {
    this.items.push(item);
  }

  /**
   * Get a reference to a hud item by name
   *
   * @param   {string}   name  the name of the hud item to retrieve
   *
   * @return  {HudItem|null}   the hud item if found otherwise null.
   */
  public getByName(name: string): HudItem | null {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) return this.items[i];
    }
    return null;
  }

  /**
   * Tracks the cursor position
   *
   * @param   {Vector}  position  Position of the mouse.
   *
   * @return  {void}
   */
  public setCursorPosition(position: Vector): void {
    this.cursor_position = position;
  }
}