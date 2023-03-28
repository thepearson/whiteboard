import { Vector } from "vector2d";
import { Constants } from "../constants";
import drawCircle from "../util/circle";
import Color from "../util/color";
import HudItem from "./hud_item";

export default class Palette extends HudItem {

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
  selected_color_index: number = 1;

  constructor() {
    super("palette");
    for (var color of Constants.COLORS) {
      this.colors.push(new Color(color.r, color.g, color.b, color.a));
    }

    this.update();
  }

  /**
   * Build the UI
   *
   * @return  {void}
   */
  public build(): void {
    const target = document.getElementById('palette');
    if (!target) return;
    target.innerHTML = '';
    for (let i = 0; i < this.colors.length; i++) {
      const div = document.createElement("div")
      div.style.backgroundColor = this.colors[i].getHex();
      div.classList.add("color");
      if (i === this.selected_color_index) div.classList.add("selected");

      div.addEventListener('click', (event: MouseEvent) => {
        this.setColorIndex(i)
      })
      target?.appendChild(div);
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
