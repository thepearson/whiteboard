export const LAYER_CREATE_KEYS: number = 0;

export const Constants: {
  PALLETTE_SIZE: number,
  GUIDE_SIZE: number,
  TOOL_SPACING: number,
  CANVAS_SIZE: {
    width: number,
    height: number
  },
  LAYERS_WIDTH: number,
  CANVAS_TARGET: string,
  LAYER_CREATE_DELAY: number,
  LAYER_CREATE_BEHAVIOR: number;
} = {
  PALLETTE_SIZE: 60,
  TOOL_SPACING: 20,
  CANVAS_SIZE: {
    width: (window) ? window.innerWidth : 1980,
    height: (window) ? window.innerHeight : 1080
  },
  GUIDE_SIZE: 10,
  LAYERS_WIDTH: 125,
  LAYER_CREATE_DELAY: 5000,
  LAYER_CREATE_BEHAVIOR: LAYER_CREATE_KEYS,
  CANVAS_TARGET: "drawing-canvas"
}
