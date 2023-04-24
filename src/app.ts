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
    this.drawing = new Drawing();

    // Sets the defaul/starting Tool.
    this.drawing.setTool(new Marker(this.drawing));

    // Add a layer to the drawing
    this.drawing.addLayer();

    // Items to the hud
    const hud = new Hud();

    // Attach palette to the HUD
    const palette = new Palette();
    palette.setColorIndex(0);
    hud.addItem(palette);

    const toolbar = new Toolbar("toolbar", this.drawing);
    hud.addItem(toolbar);


    // Attach the layers overview to the HUD
    const layers = new Layers(this.drawing);
    hud.addItem(layers);

    // Draw the overview, for each layer
    layers.build();
    
    // Attach the HUD to the drawing
    this.drawing.hud = hud;

    // Event listener to close the help popup that shows on load.
    document.querySelector("#help #close")?.addEventListener('click', (event: Event) => {
      const help = document.getElementById("help")
      help?.classList.remove("visible");
      help?.classList.add("hidden");
    });

    // Pass off all Keyboard events to the key_events handler. 
    // Do this globally. Not just on the Canvas.
    const keyEventHandler = new KeyEvents(this.drawing)
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      keyEventHandler.handle(event);
    });
    
    // Attach some events to the main canvas
    if (this.canvas instanceof HTMLCanvasElement) {

      // Update the target position (where we want to draw) when the mouse moves over the canvas
      this.mouse_move = this.canvas.addEventListener("mousemove", (event: MouseEvent) => {
        const mouse_pos = new Vec2.Vector(event.clientX, event.clientY);
        this.drawing?.setTargetPosition(mouse_pos);
        hud.setCursorPosition(mouse_pos);
      })

      // If the mouse is down, signal to then drawing object that we're 
      // drawing, with whatever tool we've currently selected.
      this.mouse_down = this.canvas.addEventListener("mousedown", (event: MouseEvent) => {
        this.drawing?.tool?.startDrawing()
      })

      // Listen for mousewheel, and resize the tool depending on direction.
      this.mouse_wheel = this.canvas.addEventListener("wheel", (event: WheelEvent) => {
        if (!this.drawing) return;
        if (event.deltaY > 0) {
          this.drawing.tool?.setSize(this.drawing?.tool.size - 2)
        } else {
          this.drawing.tool?.setSize(this.drawing?.tool.size + 2)
        }
        this.drawing.global_target_size = this.drawing?.tool?.size || 20;
      })

      // If we mouseup we need to tell the drawing object, we've stopped drawing.
      this.mouse_up = this.canvas.addEventListener("mouseup", (event: MouseEvent) => {
        this.drawing?.tool?.stopDrawing();
      })
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
 