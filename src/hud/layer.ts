import { Constants } from "../constants";
import Entity from "../entities/entity";

export default class Layer {

  /**
   * Reference to the parent
   */
  parent: HTMLCanvasElement | null = null;

  /**
   * [description]
   */
  entities: Array<Entity> = [];

  /**
   * The width of this canvas layer
   *
   * @var {[type]}
   */
  width: number = Constants.LAYERS_WIDTH;

  /**
   * The height of this canvas layer
   */
  height: number = 100;

  /**
   * Layer entity
   *
   * @param   {HTMLCanvasElement}  parent  [parent description]
   * @param   {Entity}             entity  [entity description]
   *
   * @return  {[type]}                     [return description]
   */
  constructor(parent: HTMLCanvasElement, entities: Array<Entity>, ratio: number) {
    this.parent = parent;
    this.entities = [...entities];
  }

  /**
   * [description]
   */
  public draw(): void{
    const canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.classList.add('layer')
    const context = canvas.getContext('2d');

    this.parent?.appendChild(canvas);

    if (context == null) return;

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw(context)
    }
  }

}