import Entity from "./entities/entity";
import * as Vec2 from 'vector2d'; 
import { Constants } from "./constants";
import Pen from "./tools/pen";
import Palette from "./hud/palette";
import Hud from "./hud/hud";
import Color from "./util/color";
import HudItem from "./hud/hud_item";
import Layers from "./hud/layers";

/**
 * Main world class, constructs everytrhing about the game world
 */
export default class Drawing {

  /**
   * All drawn entities, these will all get 
   * processed and rendered when the need to be
   *
   * @var  {Map<number, Entity>}
   */
  entities: Map<number, Entity> = new Map();

  /**
   * Heads up display (GUI)
   * 
   * @var {Hud}
   */
  hud: Hud | null = null;

  /**
   * Entity incremental number, used to track unique numerical
   * id of all entities loaded onto the canvas
   * 
   * @var {number}
   */
  entity_id: number = 0;

  /**
   * The active entity
   * 
   */
  active_entity: Entity | null = null;

  /**
   * Should we draw the targets?
   * 
   * @var {boolean}
   */
  draw_target: boolean = true;

  /**
   * Target current location
   *
   * @var {Vec2.Vector}
   */
  target: Vec2.Vector | null = null;

  /**
   * Current pen
   * 
   * @var {Pen}
   */
  pen: Pen | null = null;


  /**
   * [description]
   */

  /**
   * Helper to calculate FPS and framerates
   * 
   * @var {number}
   */
  timeToDraw: number = 0;

  /**
   * Holder for deltatime
   * 
   * @var {number}
   */
  dt: number = 0;

  /**
   * Previous frame timestamp
   * 
   * @var {DOMHighResTimeStamp}
   */
  oldTimestamp: DOMHighResTimeStamp = 0.0;

  /**
   * Frames per second holder
   * 
   * @var {number}
   */
  fps: number = 0;

  /**
   * Show debug?
   * 
   * @var {boolean}
   */
  show_debug: boolean = false;

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
   * Adds an entity to the game
   *
   * @param   {Entity}  entity  Entity to add to the gameworld
   *
   * @return  {void}
   */
  public addEntity(entity: Entity): void {
    entity.id = this.entity_id;
    entity.drawing = this;
    this.entities.set(this.entity_id, entity);
    this.entity_id += 1;

    const layers: Layers = this.hud?.getByName('layers') as Layers;
    layers.build();
    layers.draw();
  }

  /**
   * Set the pen
   *
   * @param   {Pen}  pen  Set's the active pen to Pen
   *
   * @return  {void}
   */
  public setPen(pen: Pen): void {
    this.pen = pen;
  }

  /**
   * Unset's the current target
   *
   * @return  {void}
   */
  public unsetTarget(): void {
    this.target = null;
  }

  /**
   * Sets the current target position
   *
   * @var {Vec2.Vector} mouse_pos   Target position
   * 
   * @return {void}
   */
  public setTargetPosition(mouse_pos: Vec2.Vector) : void {
    this.target = mouse_pos;
    if (this.pen) {
      this.pen.setLocation(mouse_pos);
    }
  }

  /**
   * Helper function to draw the targets
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public drawTarget(context: CanvasRenderingContext2D): void {
    if (this.pen != null) {
      this.pen.drawTarget(context);
    }
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

  /**
   * Remove an entity fromt he game
   *
   * @param   {number}  id  Numebrical ID of the entity 
   *
   * @return  {void}
   */
  public removeEntity(id: number): void {
    this.entities.delete(id);
  }

  /**
   * Draw the debugging panel
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public drawDebug(context: CanvasRenderingContext2D): void {
    // Draw number to the screen
    context.fillStyle = '#dddddd55';
    context.fillRect(Constants.CANVAS_SIZE.width - 75, Constants.CANVAS_SIZE.height - 100, 75, 100);
    context.font = '11px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + this.fps, Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 85);
    context.fillText("ENT: " + this.entities.size, Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 70);
  }

  /**
   * Draw the HUD gui
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public drawGui(context: CanvasRenderingContext2D): void {
    if (!this.hud) return;
    this.hud.render(context);
  }

  /**
   * Returns the current active color
   *
   * @return  {Color}   The selected color
   */
  public getColor(): Color {
    const pallette: Palette | null = this.hud?.getByName("palette") as Palette;
    if (pallette) {
      return pallette.getColor();
    }
    return new Color(0, 0, 0);
  }

  /**
   * Process all the rendering for the world
   *
   * @param   {HTMLCanvasElement}         canvas   Canvas
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    // Clear the screen every frame
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Render each og the entitites. (Drawings)
    for (let [key, entity] of this.entities) {
      entity.render(context)
    }

    // Draw any pen helpers
    if (this.pen?.active_entity) {
      this.pen.active_entity.draw(context);
    }

    //
    if (this.pen?.is_drawing) {
      this.pen.draw(context);
    }

    // draw target if any
    if (this.draw_target) this.drawTarget(context);

    if (this.show_debug) this.drawDebug(context);

    this.drawGui(context);
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
   * Do all world calculations
   *
   * @param   {number}               gameTime   DeltaTime
   * @param   {DOMHighResTimeStamp}  timestamp  Current time
   *
   * @return  {void}
   */
  public process(time: number, timestamp: DOMHighResTimeStamp) : void {
    // Calculate the number of seconds passed since the last frame
    this.timeToDraw = time / 1000;

    // Calculate fps
    this.fps = Math.round(1 / this.timeToDraw);

    this.removeEntities();
    for (let [key, entity] of this.entities) {
      entity.process(time)
    }

    // Allow hud to process things
    if (this.hud) this.hud.process(time);
  }
}
