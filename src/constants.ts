import { ColorMap } from "./types"

// The default colors
export const COLOR_RED: ColorMap = {r: 255, g: 0, b: 0, a: 1.0}
export const COLOR_GREEN: ColorMap = {r: 0, g: 192, b: 0, a: 1.0}
export const COLOR_BLUE: ColorMap = {r: 0, g: 0, b: 255, a: 1.0}
export const COLOR_YELLOW: ColorMap = {r: 255, g: 255, b: 0, a: 1.0}
export const COLOR_ORANGE: ColorMap = {r: 255, g: 128, b: 0, a: 1.0}
export const COLOR_BLACK: ColorMap = {r: 0, g: 0, b: 0, a: 1.0}

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
  COLORS: ColorMap[],
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
  COLORS: [
    COLOR_RED,
    COLOR_GREEN,
    COLOR_BLUE,
    COLOR_YELLOW,
    COLOR_ORANGE,
    COLOR_BLACK
  ], 
  CANVAS_TARGET: "drawing-canvas"
}
