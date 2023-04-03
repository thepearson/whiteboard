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
   * The layer we're currently working on
   */
  current_layer: Layer | null = null;

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


  public addLayer(): void {

  }

  public build(): void {
    switch (Constants.LAYER_CREATE_BEHAVIOR) {
      case LAYER_CREATE_TIME:
        this.buildTime();
        break;
      case LAYER_CREATE_KEYS:
      default:
        this.buildDefault();
        break;
    }
  }

  public buildDefault(): void {
    if (!this.drawing) return;
    if (!this.target) return;

    if (!this.current_layer) {
      //this.current_layer = new Layer(this.target, 1, 0);
    }

    // for (let [key, entity] of this.drawing.entities) {

    // }
  }

  /**
   * Build the layers
   *
   * @return  {void}    [return description]
   */
  public buildTime(): void {
    if (!this.drawing) return;
    if (!this.target) return;

    let index = 0;
    let current_time = 0;

    //this.current_layer = new Layer(this.target, 1, index);
    // for (let [key, entity] of this.drawing.entities) {
    //   if (entity.completed < (current_time + Constants.LAYER_CREATE_DELAY)) {
    //     this.current_layer.addEntity(entity);
    //     current_time = entity.completed;
    //   } else {
    //     index++;
    //     current_time = entity.completed;
    //     this.current_layer = new Layer(this.target, 1, index);
    //     this.current_layer.addEntity(entity);
    //     this.layers.push(this.current_layer);
    //   }
    // }
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