import Drawing from "../drawing";
import HudItem from "./hud_item";
import Layer from "./layer";

export default class Layers extends HudItem {

  /**
   * Reference to the drawing
   */
  drawing: Drawing | null;


  /**
   * Array containing all the layers
   */
  layers: Array<Layer> = [];

  /**
   * Sets up the layers section
   *
   * @param   {Drawing}  drawing
   *
   * @return  {[type]}
   */
  constructor(drawing: Drawing) {
    super("layers");
    this.drawing = drawing;
  }

  /**
   * Build the layers
   *
   * @return  {void}    [return description]
   */
  public build(): void {
    if (!this.drawing) return;
    const target: HTMLCanvasElement = document.getElementById('layers') as HTMLCanvasElement;
    if (!target) return;
    target.innerHTML = '';
    for (let [key, entity] of this.drawing.entities) {
      const layer = new Layer(target, [entity], 1);
      this.layers.push(layer);
      layer.draw();
    }
  }
}