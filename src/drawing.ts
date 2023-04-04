import Entity from "./entities/entity";
import * as Vec2 from 'vector2d'; 
import { Constants } from "./constants";
import Pen from "./tools/pen";
import Palette from "./hud/palette";
import Hud from "./hud/hud";
import Color from "./util/color";
import Layer from "./tools/layer";

/**
 * Main world class, constructs everytrhing about the game world
 */
export default class Drawing {



  /**
   * Layer incremental number, used to track unique numerical
   * id of all entities loaded onto the canvas
   * 
   * @var {number}
   */
  layer_id: number = 0;



  /**
   * The layers
   *
   * @return  {[type]}  [return description]
   */
  layers: Map<number, Layer> = new Map();



  /**
   * Heads up display (GUI)
   * 
   * @var {Hud}
   */
  hud: Hud | null = null;



  /**
   * The active layer
   */
  active_layer: Layer | null = null;



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
   * Returns a Layer
   *
   * @param   {number}  id  Layer numerical ID
   *
   * @return  {Layer}
   */
  public getLayer(id: number): Layer | null {
    const layer = this.layers.get(id);
    if (layer) return layer;
    return null;
  }


  /**
   * [addLayer description]
   *
   * @return  {void}    [return description]
   */
  public addLayer(): void {
    this.active_layer = new Layer(this.layer_id, this);
    this.layers.set(this.active_layer.id, this.active_layer);
    this.layer_id++;
  }
  
  /**
   * Adds an entity to the active layer
   *
   * @param   {Entity}  entity  Entity to add to the gameworld
   *
   * @return  {void}
   */
  public addEntity(entity: Entity): void {
    if (!this.active_layer) this.addLayer();
    this.active_layer?.addEntity(entity);
    this.hud?.getByName("layers")?.build();
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
    for (let [key, layer] of this.layers) {
      count += layer.countEntities(type);
    }
    return count;
  }

  /**
   * Remove a Layer from the canvas
   *
   * @param   {number}  id  Numebrical ID of the entity 
   *
   * @return  {void}
   */
  public removeLayer(id: number): void {
    this.layers.delete(id);
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
    context.fillText("LAYERS: " + this.layers.size, Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 70);
    context.fillText("ENT: " + this.countEntities(), Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 55);
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

    // Render each of the existing entitites. (Drawings)
    for (let [key, layer] of this.layers) {
      layer.render(context)
    }

    // Draw any pen helpers, draw the thing currently being drawn.
    if (this.pen?.active_entity) {
      this.pen.active_entity.draw(context);
    }

    // Draw to the entity currently being drawn
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
    for (let [key, layer] of this.layers) {
      layer.removeEntities();
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
    for (let [key, layer] of this.layers) {
      layer.process(time, timestamp)
    }

    // Allow hud to process things
    if (this.hud) this.hud.process(time);
  }
}
