import { Constants } from "../constants";
import Drawing from "../drawing";
import Color from "../util/color";
import HudItem from "./hud_item";
import Picker from 'vanilla-picker';

export default class ColorPicker extends HudItem {

  /**
   * Ref to the drawing
   */
  drawing: Drawing | null = null;

  /**
   * Sets up the Palette HUD item
   */
  constructor(drawing: Drawing) {
    super("picker");
    this.drawing = drawing;
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
    const stroke = document.createElement('div');
    stroke.classList.add('color');
    stroke.classList.add('stroke');
    stroke.title = 'Stroke Color';
    stroke.style.backgroundColor = (this.drawing?.stroke_color as Color).getHex();
    var strokePicker = new Picker({
      parent: stroke,
      popup: 'top',
      color: (this.drawing?.stroke_color as Color).getHex()
    });
    strokePicker.onChange = (color) => {
      if (this.drawing) {
        const newColor = new Color(color.rgba[0], color.rgba[1], color.rgba[2], color.rgba[3]);
        this.drawing.stroke_color = newColor;
        stroke.style.backgroundColor = newColor.getHex();
      }
    };
    target?.appendChild(stroke);

    const fill = document.createElement('div');
    fill.classList.add('color');
    fill.classList.add('fill');
    fill.title = 'Fill Color';
    fill.style.backgroundColor = (this.drawing?.fill_color as Color).getHex();
    // Add the event listener
    var fillPicker = new Picker({
      parent: fill,
      popup: 'top',
      color: (this.drawing?.fill_color as Color).getHex()
    });
    fillPicker.onChange = (color) => {
      if (this.drawing) {
        const newColor = new Color(color.rgba[0], color.rgba[1], color.rgba[2], color.rgba[3]);
        this.drawing.fill_color = newColor;
        fill.style.backgroundColor = newColor.getHex();
      }
    };
    target?.appendChild(fill);
  }

}
