declare module "p5collide" {
  function collideRectCircle(
    rx: number,
    ry: number,
    rw: number,
    rh: number,
    cs: number,
    cy: number,
    diameter: number
  ): boolean;
  function collideCirclePoly(
    cx: number,
    cy: number,
    diameter: number,
    vertices: any[]
  ): boolean;
}
