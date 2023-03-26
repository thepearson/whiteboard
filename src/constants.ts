import { ColorMap } from "./types"

export const Constants: {
  PALLETTE_SIZE: number,
  TOOL_SPACING: number,
  CANVAS_SIZE: {
    width: number,
    height: number
  },
  COLORS: ColorMap[],
  CANVAS_TARGET: string
} = {
  PALLETTE_SIZE: 60,
  TOOL_SPACING: 20,
  CANVAS_SIZE: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  COLORS: [
    {
      r: 255,
      g: 0,
      b: 0,
      a: 1.0
    },
    {
      r: 0,
      g: 192,
      b: 0,
      a: 1.0
    },
    {
      r: 0,
      g: 0,
      b: 255,
      a: 1.0
    },
    {
      r: 255,
      g: 255,
      b: 0,
      a: 1.0
    },
    {
      r: 255,
      g: 128,
      b: 0,
      a: 1.0
    },
    {
      r: 0,
      g: 0,
      b: 0,
      a: 1.0
    },
  ], 
  CANVAS_TARGET: "drawing-canvas"
}
