import { Constants, LAYER_CREATE_TIME, LAYER_CREATE_KEYS } from "../constants";
import Drawing from "../drawing";
import HudItem from "./hud_item";
import Layer from "../tools/layer";

export default class Layers extends HudItem {


  /**
   * Reference to the drawing
   */
  drawing: Drawing | null;


  /**
   * HTML Canvas E
   */
  target: HTMLDivElement | null = null;


  /**
   * Sets up the layers section
   *
   * @param   {Drawing}  drawing
   *
   * @return  {[type]}
   */
  constructor(drawing: Drawing) {
    super("layers");
    this.target = document.getElementById('layers') as HTMLDivElement;
    this.drawing = drawing;
  }


  /**
   * Build the layers UI
   *
   * @return  {void}
   */
  public build(): void {
    if (!this.drawing) return;
    if (!this.target) return;

    this.target.innerHTML = '';
    const width = Constants.LAYERS_WIDTH;
    const height = (width / Constants.CANVAS_SIZE.width) * Constants.CANVAS_SIZE.height;
    for (let [key, layer] of this.drawing.layers) {
      layer.draw(this.target, width, height, this.drawing.active_layer === layer);
    }
  }
}
