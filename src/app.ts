import { Constants } from "./constants";
import * as Vec2 from "vector2d";
import Drawing from "./drawing";
import Marker from "./tools/marker";
import Pallette from "./hud/palette";
import Hud from "./hud/hud";
import { Vector } from "vector2d";

/**
 * The top-level Game class, manages setup, base loop, and events
 */
export default class App {
  
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

    // Set canvas dimensions
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
    // Create world
    this.drawing = new Drawing();
    this.drawing.setPen(new Marker(this.drawing));
    //this.drawing.setPallette(new Pallette());

    // Items to the hud
    const hud = new Hud();
    const pallette = new Pallette(new Vector(Constants.CANVAS_SIZE.width / 2, Constants.CANVAS_SIZE.height - Constants.PALLETTE_SIZE));
    pallette.setColorIndex(0);
    hud.addItem(pallette);

    this.drawing.hud = hud;
    
    // Add events
    if (this.canvas instanceof HTMLCanvasElement) {
      this.mouse_move = this.canvas.addEventListener("mousemove", (event: MouseEvent) => {
        const mouse_pos = new Vec2.Vector(event.clientX, event.clientY);
        this.drawing?.setTargetPosition(mouse_pos);
        hud.setCursorPosition(mouse_pos);
      })

      this.mouse_down = this.canvas.addEventListener("mousedown", (event: MouseEvent) => {
        this.drawing?.pen?.startDrawing()
      })

      this.mouse_wheel = this.canvas.addEventListener("wheel", (event: WheelEvent) => {
        if (event.deltaY > 0) {
          this.drawing?.pen?.setSize(this.drawing?.pen.size - 2)
        } else {
          this.drawing?.pen?.setSize(this.drawing?.pen.size + 2)
        }
      })

      this.mouse_up = this.canvas.addEventListener("mouseup", (event: MouseEvent) => {
        this.drawing?.pen?.stopDrawing();
      })
    }
  }


  /**
   * Processes any periodic timers
   *
   * @param   {DOMHighResTimeStamp}  timestamp  EPOC Milliseconds
   *
   * @return  {void}
   */
  private processTimers(timestamp: DOMHighResTimeStamp): void {

  }

  /**
   * Process any game calculations, cascades down to the 
   * World object and passes off any entity based calcs to there.
   * Then trigger of all rendering for the world.
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
 