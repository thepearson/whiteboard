import { Constants } from "../constants";
import Drawing from "../drawing";
import Entity from "../entities/entity";

export default class Layer {


  /**
   * Layer ID
   */
  id: number = -1;



  /**
   * All drawn entities, these will all get 
   * processed and rendered when the need to be
   *
   * @var  {Map<number, Entity>}
   */
  entities: Map<number, Entity> = new Map();



  /**
   * The active entity
   */
  active_entity: Entity | null = null;



  /**
   * Entity incremental number, used to track unique numerical
   * id of all entities loaded onto the canvas
   * 
   * @var {number}
   */
  entity_id: number = 0;



  /**
   * Reference to the main Drawing
   */
  drawing: Drawing | null = null;



  /**
   * Constructor for Layer
   *
   * @param   {Drawing}  drawing  Drawing reference
   *
   * @return  {[type]} 
   */
  constructor(id: number, drawing: Drawing) {
    this.id = id;
    this.drawing = drawing;
  }



  /**
   * Adds an entity to the game
   *
   * @param   {Entity}  entity  Entity to add to the gameworld
   *
   * @return  {void}
   */
  public addEntity(entity: Entity): void {
    entity.id = this.entity_id;
    entity.drawing = this.drawing;
    this.entities.set(this.entity_id, entity);
    this.entity_id += 1;
  }


  /**
   * Garbage clean up, removes any entities that are schedule for removal
   *
   * @return  {void} 
   */
  public removeEntities(): void {
    const ids: number[] = [];
    for (let [key, entity] of this.entities) {
      if (entity.remove) {
        this.entities.delete(key);
      }
    }
  }



  /**
   * Returns a game Entity
   *
   * @param   {number}  id  Entiti numerical ID
   *
   * @return  {Entity}
   */
  public getEntity(id: number): Entity | null {
    const entity = this.entities.get(id);
    if (entity) return entity;
    return null;
  }



  /**
   * Return count of entites by type, if no type specified, 
   * then retunr count of all.
   *
   * @param   {string}  type  Entity Type|Name [optional]
   *
   * @return  {number}        Number of entities
   */
  public countEntities(type?: string): number {
    let count = 0;

    if (!type) return this.entities.size;

    for (let [key, entity] of this.entities) {
      if (entity.name == type && entity.remove == false) {
        count++;
      }
    }
    return count;
  }


  public process(time: number, timestamp: DOMHighResTimeStamp): void {
    for (let [key, entity] of this.entities) {
      if (entity.remove) {
        this.entities.delete(key)
      }
    }
  }

  public render(context: CanvasRenderingContext2D):void {
   // Render each of the existing entitites. (Drawings)
    for (let [key, entity] of this.entities) {
      entity.render(context)
    }
  }


  /**
   * Handles the UI drawing of a layer
   *
   * @param   {HTMLDivElement}     parent  [parent description]
   * @param   {number}             width   [width description]
   * @param   {number}             height  [height description]
   *
   * @return  {void}                       [return description]
   */
  public draw(parent: HTMLDivElement, width: number, height: number, active?: boolean): void {
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    canvas.id = `layer-${this.id}`;
    canvas.classList.add('layer')
    if (active) {
      canvas.classList.add('active')
    }

    const context = canvas.getContext('2d');
    parent?.insertBefore(canvas, parent.firstChild);

    if (context == null) return;

    for (let [key, entity] of this.entities) {
      entity.render(context)
    }
  }

}