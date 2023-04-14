import Entity from "./entities/entity";
import * as Vec2 from 'vector2d'; 
import { Constants } from "./constants";
import Pen from "./tools/pen";
import Palette from "./hud/palette";
import Hud from "./hud/hud";
import Color from "./util/color";
import Layer from "./tools/layer";

/**
 * Main drawing class, constructs everytrhing
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
   * @var  {Map<number, Layer>}
   */
  layers: Map<number, Layer> = new Map();

  /**
   * Heads up display (GUI)
   * 
   * @var {Hud}
   */
  hud: Hud | null = null;

  /**
   * The active layer, the layer we're currently drawing on.
   */
  active_layer: Layer | undefined;

  /**
   * Should we draw the targets. This is the size and shape of the current brush/tool.
   * This is a temporary overlay so the user can see an indeication of what they are 
   * doing before they do it.
   * 
   * @var {boolean}
   */
  draw_target: boolean = true;

  /**
   * Target current location, where we're drawing/working.
   *
   * @var {Vec2.Vector}
   */
  target: Vec2.Vector | null = null;

  /**
   * Current pen/tool the user has selected.
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
   * Holder for deltatime, used for animation.
   * 
   * @var {number}
   */
  dt: number = 0;

  /**
   * Previous frame timestamp, used to calculate FPS and animations.
   * 
   * @var {DOMHighResTimeStamp}
   */
  oldTimestamp: DOMHighResTimeStamp = 0.0;

  /**
   * Frames per second
   * 
   * @var {number}
   */
  fps: number = 0;

  /**
   * Show debug. Do we want to show debug info onscreen.
   * 
   * @var {boolean}
   */
  show_debug: boolean = false;

  /**
   * Remove a Layer from the canvas
   *
   * @param   {number}  layer_id    ID of the layer to remove
   *
   * @return  {void}
   */
  public removeLayer(layer_id: number | undefined): void {
    if (layer_id === undefined) {
      return;
    }

    // This removes the layer from the drawing
    this.layers.delete(layer_id);

    // Now that the layer has been removed
    // we need to set the new active_layer.

    // If there's one below, then choose that.
    if (this.layers.has(layer_id - 1)) {
      this.active_layer = this.layers.get(layer_id - 1);

    // Otherwise choose the one above if it exists
    } else if (this.layers.has(layer_id + 1)) {
      this.active_layer = this.layers.get(layer_id + 1);
    
    // If neither of those are true...
    } else {
      if (this.layers.size === 0) {
        // If there are no layers left, create a new one, set it active.
        this.layers.clear();
        this.addLayer();  
      } else {
        // Oteherwise choose the layer with the smallest ID
        this.active_layer = this.layers.get(Math.min(...this.layers.keys()));
      }
    }

    // Redraw the layers overview.
    this.redrawHud();
  }

  /**
   * Given an ID, return a Layer with that ID if it exists, null if it doesn't.
   *
   * @param   {number}  layer_id  ID of the layer to return.
   *
   * @return  {Layer | null}
   */
  public getLayer(layer_id: number): Layer | null {
    const layer = this.layers.get(layer_id);
    if (layer) return layer;
    return null;
  }

  /**
   * Redraw all HUD items. We don't want to do 
   * this every frame as these are DOM items, so we have 
   * an explicit call to do so when we need to.
   *
   * @return  {void}
   */
  public redrawHud(): void {
    this.hud?.getByName("layers")?.build();
  }

  /**
   * Add a layer to the drawing, set it as active  
   * and redraw the hud to show it in the layer overview.
   *
   * @return  {void}
   */
  public addLayer(): void {
    this.active_layer = new Layer(this.layer_id, this);
    this.layers.set(this.active_layer.id, this.active_layer);
    this.layer_id++;
    this.redrawHud();
  }

  /**
   * Sets the active layer.
   * 
   * @param   {number}  layer_id  ID of the layer to set as active.
   *
   * @return  {void}
   */
  public setActiveLayer(layer_id: number): void {
    // TODO: Assumes the layer_id exists, what do we do if it doesn't?
    this.active_layer = this.layers.get(layer_id);
    this.redrawHud();
  }

  /**
   * Returns the next Layer
   *
   * @param   {number}  current_layer_id  ID of the current layer.
   *
   * @return  {number}   Returns the ID of the next layer in the Map()
   */
  public getNextLayer(current_layer_id: number): number {
    return 0;
  }

  /**
   * Adds an entity to the active layer. This will get drawn in the next frame.
   *
   * @param   {Entity}  entity  Entity to add to the gameworld
   *
   * @return  {void}
   */
  public addEntity(entity: Entity): void {
    if (!this.active_layer) this.addLayer();
    this.active_layer?.addEntity(entity);
    this.redrawHud();
  }

  /**
   * Set the pen/tool that the user has selected.
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
   * Sets the current target position (Where the mouse is)
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
   * Helper function to draw the targets, (Draws the Pen helper to the UI)
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
   * Return count of all entites by type, if no type specified, 
   * then retunr count of all.
   *
   * @param   {string?}  type  Entity Type|Name [optional]
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
   * Draw the debugging panel
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public drawDebug(context: CanvasRenderingContext2D): void {
    context.fillStyle = '#dddddd55';
    context.fillRect(Constants.CANVAS_SIZE.width - 75, Constants.CANVAS_SIZE.height - 100, 75, 100);
    context.font = '11px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + this.fps, Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 85);
    context.fillText("LAYERS: " + this.layers.size, Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 70);
    context.fillText("ENT: " + this.countEntities(), Constants.CANVAS_SIZE.width - 70, Constants.CANVAS_SIZE.height - 55);
  }

  /**
   * Draw the HUD
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public drawHud(context: CanvasRenderingContext2D): void {
    if (!this.hud) return;
    this.hud.render(context);
  }

  /**
   * Returns the current active color, as specified bu the palette.
   * defaults to Black if no color is set.
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
   * Parent for all the rendering for the app
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

    // Draw target, if turned on.
    if (this.draw_target) this.drawTarget(context);

    // Show the debug, if turned on.
    if (this.show_debug) this.drawDebug(context);

    // Draw the HUD.
    this.drawHud(context);
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

    // Remove any entities that are set for removal. Could probably 
    /// be done in the loop below if performance becomes an issue,
    // for now it's fine. Clearer to keep the seperate.
    this.removeEntities();

    // Process any entity calcs for rendering next tick.
    for (let [key, layer] of this.layers) {
      layer.process(time, timestamp)
    }

    // Allow hud to process things
    if (this.hud) this.hud.process(time);
  }
}
