import { Constants } from "../constants";
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
   * Build the layers
   *
   * @return  {void}    [return description]
   */
  public build(): void {
    if (!this.drawing) return;
    if (!this.target) return;

    let index = 0;
    let current_time = 0;

    let current_layer = new Layer(this.target, 1, index);
    for (let [key, entity] of this.drawing.entities) {
      if (entity.completed < (current_time + Constants.LAYER_CREATE_DELAY)) {
        current_layer.addEntity(entity);
        current_time = entity.completed;
      } else {
        index++;
        current_time = entity.completed;
        current_layer = new Layer(this.target, 1, index);
        current_layer.addEntity(entity);
        this.layers.push(current_layer);
      }
    }
  }

  /**
   * Draw the layers
   *
   * @return  {void}
   */
  public draw(): void {
    if (!this.target) return;

    // clear the target
    this.target.innerHTML = '';

    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].draw();
    }
  }
}