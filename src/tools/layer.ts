import { Vector } from "vector2d";
import { Constants } from "../constants";
import Drawing from "../drawing";
import Entity from "../entities/entity";
import Select from "./select";

export default class Layer {


  /**
   * This Layers ID
   * 
   * @var {number}
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
   * 
   * @var {Entity | null}
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
   * 
   * @var {Drawing | null}
   */
  drawing: Drawing | null = null;

  /**
   * Set up the Layer
   *
   * @param   {Drawing}  drawing  Drawing reference
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
   * Returns an Entity given an ID
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
    // No type specifice, so include all entities.
    if (!type) return this.entities.size;

    // A type was specified, so check type before adding
    let count = 0;
    for (let [key, entity] of this.entities) {
      if (entity.name == type && entity.remove == false) {
        count++;
      }
    }
    return count;
  }

  /**
   * Process any updates that need to be rendered next tick. We
   * have the ability to remove the entities one by one. That's 
   * still a TODO though.
   *
   * @param   {number}               deltatime        The time since last tick
   * @param   {DOMHighResTimeStamp}  timestamp        Current timestamp
   *
   * @return  {void}
   */
  public process(deltatime: number, timestamp: DOMHighResTimeStamp): void {
    for (let [key, entity] of this.entities) {
      if (entity.remove) {
        this.entities.delete(key)
      }
    }
  }

  /**
   * Handle all the rendering for this layers entities
   *
   * @param   {CanvasRenderingContext2D}  context  The canvas context for applying the entity reders to
   *
   * @return  {void}
   */
  public render(context: CanvasRenderingContext2D):void {
   // Render each of the existing entitites. (Drawings)
    for (let [key, entity] of this.entities) {
      entity.render(context)
    }
  }


  /**
   * Handles the UI drawing of a layer in the layer overview
   *
   * @param   {HTMLDivElement}     parent  The Div element to render into
   * @param   {number}             width   The target width of the canvas
   * @param   {number}             height  The target height of the canvas
   *
   * @return  {void}
   */
  public draw(parent: HTMLDivElement, width: number, height: number, active?: boolean): void {
    // Create the new Canvas Element
    const canvas = document.createElement("canvas") as HTMLCanvasElement;

    // Set all it's properties
    canvas.width = width;
    canvas.height = height;
    canvas.id = `layer-${this.id}`;
    canvas.classList.add('layer')

    // Listen for the selected layer click
    canvas.addEventListener('click', (event: Event) => {
      this.drawing?.setActiveLayer(this.id);
    })
    
    // Set the active class if it's the currently selected one.
    if (active) {
      canvas.classList.add('active')
    }

    // Newer layers go on top, so `insertBefore` is used
    parent?.insertBefore(canvas, parent.firstChild);

    // Get the context for rendering
    const context = canvas.getContext('2d');
    if (context == null) return;

    // Render each of the entities to the new HTMLCanvasElement
    for (let [key, entity] of this.entities) {
      entity.render(context)
    }
  }

  /**
   * [drawGuides description]
   *
   * @param   {CanvasRenderingContext2D}  context  [context description]
   * @param   {Vector}                    target   [target description]
   *
   * @return  {void}                               [return description]
   */
  public drawGuides(context: CanvasRenderingContext2D, target: Vector): void {
    let selected_vector: Vector | void;

    for (let [key, entity] of this.entities) {
      entity.drawGuides(context, target);
      if (!selected_vector) {
        selected_vector = entity.getIntercetingVector(target);
      }
    }

    if (selected_vector) {
        (this.drawing?.tool as Select).selected_vector = selected_vector;
    } else {
        (this.drawing?.tool as Select).selected_vector = null;
    }
  }

}