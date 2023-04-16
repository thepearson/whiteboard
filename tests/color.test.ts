import Color from '../src/util/color';

test("Hex values without alpha", () => {
  let color = new Color(0, 0, 0);
  expect(color.getHex(false)).toBe("#000000");

  color = new Color(255, 0, 0);
  expect(color.getHex(false)).toBe("#ff0000");

  color = new Color(255, 255, 255);
  expect(color.getHex(false)).toBe("#ffffff");
});

test("Hex values with alpha", () => {
  let color = new Color(0, 0, 0, 1.0);
  expect(color.getHex()).toBe("#000000ff");

  color = new Color(0, 255, 0, 0.0);
  expect(color.getHex()).toBe("#00ff0000");
  
  color = new Color(255, 255, 255, 0.5);
  expect(color.getHex()).toBe("#ffffff80");
});

test("RGBString function", () => {
  let color = new Color(255, 255, 0, 0.5);
  expect(color.getRgbString()).toBe("rgba(255, 255, 0, 0.5)");

  color = new Color(255, 0, 255, 0.5);
  expect(color.getRgbString(false)).toBe("rgb(255, 0, 255)");
});

test("RGB array function", () => {
  const color = new Color(255, 0, 255, 0.5);
  expect(color.getRgb()).toEqual([255, 0, 255]);
});

test("RGBA array function", () => {
  const color = new Color(255, 0, 255, 0.5);
  expect(color.getRgba()).toEqual([255, 0, 255, 0.5]);
});

test("HSL array function", () => {
  const color = new Color(255, 0, 255, 0.5);
  expect(color.getHsl()).toEqual([300, 100, 50]);
});


