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
   * Color bounds
   */
  // color_bounds: Array<{
  //   position: Vector | null,
  //   size: number,
  //   color: Color
  // }> = [];

  /**
   * Position of Pallette
   */
  //position: Vector | null = null;

  /**
   * The currently selected color index
   */
  selected_color_index: number = 1;

  constructor(position: Vector) {
    super("pallette");
    //this.position = position;
    for (var color of Constants.COLORS) {
      this.colors.push(new Color(color.r, color.g, color.b, color.a));
    }

    this.build();
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
    this.build();
  }


  /**
   * Renders the pallette
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas 2D Drawing context
   *
   * @return  {void}
   */
  public render(context: CanvasRenderingContext2D): void {
    // if (!this.position) return;
    // let alpha = 0.2;
    // if (this.hovered) alpha = 1.0;
    // const offset = (this.colors.length / 2) * (Constants.PALLETTE_SIZE + Constants.TOOL_SPACING) - (Constants.PALLETTE_SIZE / 2 + Constants.TOOL_SPACING);

    // for (let i = 0; i < this.colors.length; i++) {
    //   const currentPosition = new Vector(this.position?.x - offset + (i * (Constants.PALLETTE_SIZE + Constants.TOOL_SPACING)), this.position?.y);
    //   if (i === this.selected_color_index) {
    //     drawCircle(context, currentPosition, new Color(204, 204, 255, alpha), Constants.PALLETTE_SIZE + 25);  
    //   }
    //   const color = this.colors[i].getRgb();
    //   this.color_bounds[i].position =currentPosition;

    //   drawCircle(context, currentPosition, new Color(color[0], color[1], color[2], alpha), Constants.PALLETTE_SIZE);
    // }
  }

  /**
   * What to do when the mouse cursor enters the pallette element
   *
   * @param   {Vector}  position
   * 
   * @return  {void}
   */
  public handleMouseEnter(position: Vector): void {
    // this.hovered = true;
    // const f = document.getElementById(Constants.CANVAS_TARGET);
    // if (f) f.style.cursor = "pointer";
  }


  /**
   * How to handle when the mouse cursor leaves the UI
   *
   * @param   {Vector}  position
   *
   * @return  {void}
   */
  public handleMouseLeave(position: Vector): void {
    // this.hovered = false;
    // const f = document.getElementById(Constants.CANVAS_TARGET);
    // if (f) f.style.cursor = "auto";
  }

  /**
   * How to deal with the click niside the element
   *
   * @param   {Vector}  position
   *
   * @return  {void}
   */
  public handleMouseClick(position: Vector): void {
    // for (let i = 0; i < this.color_bounds.length; i++) {
    //   const pos = this.color_bounds[i].position;
    //   if (!pos) continue;
    //   if (pos?.distance(position) <= this.color_bounds[i].size) {
    //     this.setColorIndex(i);
    //   }
    // }
  }
}
