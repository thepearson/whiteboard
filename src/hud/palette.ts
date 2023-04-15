import { Constants } from "../constants";
import Color from "../util/color";
import HudItem from "./hud_item";

export default class Palette extends HudItem {

  /**
   * List of available colors
   * 
   * @var {Array<Color>}
   */
  colors: Array<Color> = [];

  /**
   * The currently selected color
   * 
   * @var {Color}
   */
  selected_color: Color = new Color(0, 0, 0, 0.5);

  /**
   * The currently selected color index, this is the index 
   * in `this.colors` of the currently selected color
   * 
   * @var {number}
   */
  selected_color_index: number = 1;


  /**
   * Sets up the Palette HUD item
   */
  constructor() {
    super("palette");
    for (var color of Constants.COLORS) {
      this.colors.push(new Color(color.r, color.g, color.b, color.a));
    }
    this.update();
  }

  /**
   * Build the UI, this finds the HTMLDivElement with the
   * ID `palette` and clears it out, then places another 
   * HTMLDivElement inside for every color in `this.colors` 
   * and sets the background color to the color of each color.
   *
   * @return  {void}
   */
  public build(): void {
    const target = document.getElementById('palette');
    if (!target) return;

    // Empty the target
    target.innerHTML = '';

    // Add each of the colours as a Div with a background color
    for (let i = 0; i < this.colors.length; i++) {
      const div = document.createElement("div")
      div.style.backgroundColor = this.colors[i].getHex();

      // Add the class `color` which applies the styles
      div.classList.add("color");

      // This is the currently selected color, so add the appropriate class
      if (i === this.selected_color_index) div.classList.add("selected");

      // Add the event listener
      div.addEventListener('click', (event: MouseEvent) => {
        this.setColorIndex(i)
      })
      target?.appendChild(div);
    }
  }

  /**
   * Returns the currently selected color
   *
   * @return  {Color}   The currently selected color
   */
  public getColor(): Color {
    return this.selected_color;
  }

  /**
   * Sets the index of the selected colour and 
   * updates the selected color
   *
   * @param   {number}  index  
   *
   * @return  {void}
   */
  public setColorIndex(index: number): void {
    this.selected_color_index = index;
    this.selected_color = this.colors[this.selected_color_index];

    // Run any GUI updates
    this.update();
  }
}
