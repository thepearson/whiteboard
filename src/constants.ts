export type ColorMap = {
  r: number,
  g: number,
  b: number,
  a?: number
}

export const Constants: {
  CANVAS_SIZE: {
    width: number,
    height: number
  },
  COLORS: ColorMap[]
} = {
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
      g: 255,
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
      r: 0,
      g: 0,
      b: 0,
      a: 1.0
    },
  ]
}
