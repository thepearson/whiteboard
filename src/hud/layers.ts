import { Constants } from "../constants";
import Drawing from "../drawing";
import HudItem from "./hud_item";

export default class Layers extends HudItem {

  /**
   * Reference to the drawing
   * 
   * @var {Drawing | null}
   */
  drawing: Drawing | null;

  /**
   * HTML Div Element, where the HTMLCanvasElement layers will be created.
   * 
   * @var {HTMLDivElement | null}
   */
  target: HTMLDivElement | null = null;

  /**
   * Sets up the layers section
   *
   * @param   {Drawing}  drawing
   */
  constructor(drawing: Drawing) {
    super("layers");
    this.target = document.getElementById('layers') as HTMLDivElement;
    this.drawing = drawing;
  }


  /**
   * Build the layers UI, this empties then creates 
   * HTMLCanvasElements inside the `this.target` HTMLDivElement
   * This gives us the layer overview on the right.
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
