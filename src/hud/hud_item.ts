import { Vector } from "vector2d";

export default abstract class HudItem {

  /**
   * The name of the HudItem
   * 
   * @var {string}
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
   * Call any update functions that need to be called.
   *
   * @return  {void}
   */
  public update(): void {
    this.build();
  }


  /**
   * Each HUD item must implement a build function
   *
   * @return  {void}
   */
  public abstract build(): void;
}