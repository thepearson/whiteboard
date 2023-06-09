import { Vector } from "vector2d";
import HudItem from "./hud_item";

export default class Hud {

  /**
   * Array of items to render for the Hud
   * 
   * @var {Array<HudItem>}
   */
  items: Array<HudItem> = [];

  /**
   * If we want the HUD to be visible
   * 
   * @var {boolean}
   */
  visible: boolean = true;

  /**
   * Position of the mouse
   * 
   * @var {Vector}
   */
  cursor_position: Vector | null = null;

  /**
   * Would render any canvas based hud items.
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public render(context: CanvasRenderingContext2D): void {
    // Nothing here yet.
  }

  /**
   * Check for cursor and hud intersects
   *
   * @param   {number}  delta  [delta description]
   *
   * @return  {void}           [return description]
   */
  public process(delta: number): void {
    // Nothing here yet.
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
    item.build();
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
   * Tracks the cursor position for hud use.
   *
   * @param   {Vector}  position  Position of the mouse.
   *
   * @return  {void}
   */
  public setCursorPosition(position: Vector): void {
    this.cursor_position = position;
  }
}