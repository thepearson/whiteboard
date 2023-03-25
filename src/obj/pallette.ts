import { Constants } from "../constants";
import Color from "../util/color";

export default class Pallette {

  /**
   * List of available colors
   */
  colors: Color[] = [];

  /**
   * The currently selected color
   */
  selected_color: Color = new Color(0, 0, 0, 0.5);

  /**
   * The currently selected color index
   */
  selected_color_index: number = -1;

  constructor() {
    for (var color of Constants.COLORS) {
      this.colors.push(new Color(color.r, color.g, color.b, color.a));
    }
  }

  /**
   * Returns the current drawing color
   *
   * @return  {Color}   [return description]
   */
  public getColor(): Color {
    return this.selected_color;
  }

  public setColorIndex(index: number): void {
    
  }



}
