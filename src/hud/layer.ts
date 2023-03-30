import { Constants } from "../constants";
import Entity from "../entities/entity";

export default class Layer {

  /**
   * Reference to the parent
   */
  parent: HTMLDivElement | null = null;

  /**
   * The entities on this layer
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
   * index used for id's
   */
  index: number = 0;

  /**
   * Layer entity
   *
   * @param   {HTMLCanvasElement}  parent  [parent description]
   * @param   {Entity}             entity  [entity description]
   *
   * @return  {[type]}                     [return description]
   */
  constructor(parent: HTMLDivElement, ratio: number, index: number) {
    this.parent = parent;
    this.index = index;
    this.height = (this.width / Constants.CANVAS_SIZE.width) * Constants.CANVAS_SIZE.height;
  }

  /**
   * Adds an entity to the layer
   *
   * @param   {Entity}  entity 
   *
   * @return  {void}
   */
  public addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  /**
   * [description]
   */
  public draw(): void{
    console.log(this.index);
    let canvas: HTMLCanvasElement = document.getElementById(`layer-${this.index}`) as HTMLCanvasElement;

    if (!canvas) {
      canvas = document.createElement("canvas") as HTMLCanvasElement;
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.id = `layer-${this.index}`;
      canvas.classList.add('layer')
    }

    const context = canvas.getContext('2d');
    this.parent?.insertBefore(canvas, this.parent.firstChild);

    if (context == null) return;

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw(context)
    }
  }

}