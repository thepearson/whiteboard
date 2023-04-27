import { Constants } from "./constants";
import * as Vec2 from "vector2d";
import Drawing from "./drawing";
import Marker from "./tools/marker";
import Palette from "./hud/palette";
import Hud from "./hud/hud";
import Layers from "./hud/layers";
import KeyEvents from "./util/key_events";
import Toolbar from "./hud/toolbar";

/**
 * The top-level App class, manages setup, base loop, and events
 */
export default class App {
  

  /**
   * Event for the canvas.onKeyDown event
   */
  private key_down: any = null;

  /**
   * Event for the canvas.onMouseMove event
   */
  private mouse_move: any = null;

  /**
   * Event for the canvas.onMouseMove event
   */
  private mouse_wheel: any = null;

  /**
   * Game world object
   */
  private drawing: Drawing | undefined;

  /**
   * Event for the canvas.onMouseDown event
   */
  private mouse_down: any = null;

  /**
   * Event for the canvas.onMouseUp event
   */
  private mouse_up: any = null;

  /**
   * Drawing canvas
   */
  private canvas: HTMLCanvasElement | null = null;

  /**
   * Canvas redering context
   */
  private context: CanvasRenderingContext2D;

  /**
   * Timestamp when last frame was processed
   * used for calculating the deltaTime and
   * FPS.
   */
  private oldTimestamp: DOMHighResTimeStamp = 0.0;

  /**
   * Holder for FPS, useful when needing to render 
   * this within the game environment
   */
  private fps: number = 0;

  /**
   * Constructor
   * 
   * @param   {HTMLCanvasElement}         canvas   This is the target canvas for our game
   * @param   {CanvasRenderingContext2D}  context  This is the contet for the canvas
   */
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    // Set canvas dimensions, TODO: make this dynamic, 
    // currently it's only set when the page loads.
    this.canvas.width = Constants.CANVAS_SIZE.width;
    this.canvas.height = Constants.CANVAS_SIZE.height;
  }

  /**
   * Bootstrap function, used for setting  
   * everything up prior to kicking off the renderLoop
   *
   * @return  {void}
   */
  public setUp(): void {
    // Create drawing
    if (this.canvas) {
      this.drawing = new Drawing();
      this.drawing.setup(this.canvas);
    }
  }


  /**
   * Processes any periodic timers.
   * We can use this to trigger any time based events. ie every 5 seconds do X
   *
   * @param   {DOMHighResTimeStamp}  timestamp  EPOC Milliseconds
   *
   * @return  {void}
   */
  private processTimers(timestamp: DOMHighResTimeStamp): void {

  }

  /**
   * Entry point for all things.
   * 
   * Processes timers
   * Updates all application entities,
   * Cascades render to entities.
   * Called every frame
   *
   * @param   {DOMHighResTimeStamp}  timestamp  EPOC milliseconds
   *
   * @return  {void}
   */
  public process(timestamp: DOMHighResTimeStamp): void {

    // Short circut, these MUST exist
    if (this.canvas == null || this.context == null) return;

    // Process any timers
    this.processTimers(timestamp);

    // Calculate the number of seconds passed since the last frame
    const dt : number = timestamp - this.oldTimestamp;

    // Update timestamp for next process frame
    this.oldTimestamp = timestamp;

    // Trigger World calcs
    // TODO: async? Performance improvment at a later date.
    this.drawing?.process(dt, timestamp);

    // Render things
    this.drawing?.render(this.canvas, this.context);
  }
}
 