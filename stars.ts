import p5 from "p5";

export class Stars {
  private stars: { x: number; y: number; z: number }[] = [];

  constructor(private p: p5) {}

  draw() {
    // nach einer Lösung von https://editor.p5js.org/amyxiao/sketches/S1qEhKf2Z
    // alte Sterne löschen
    this.stars = this.stars.filter(star => star.z >= 0);

    // neue Sterne generieren
    for (let i = 0; i < Math.min(50, this.p.frameCount / 600); i++) {
      this.stars.push({
        x: this.p.random(-this.p.width / 2, this.p.width / 2),
        y: this.p.random(-this.p.height / 2, this.p.height / 2),
        z: this.p.random(this.p.width)
      });
    }

    // Sterne zeichnen
    this.p.push();
    this.p.translate(this.p.width / 2, this.p.height / 2);
    this.p.fill("white");
    this.p.noStroke();

    let speed = Math.min(50, this.p.frameCount / 600 + 1);

    for (const star of this.stars) {
      star.z = star.z - speed;
      // sx = map(star.x / star.z, 0, 1, 0, width);
      // sy = map(star.y / star.z, 0, 1, 0, height);
      // r = map(star.z, 0, width, 8, 0);
      const sx = (star.x / star.z) * this.p.width;
      const sy = (star.y / star.z) * this.p.height;
      const r = this.p.map(star.z, this.p.width, 0, 0, 8);
      this.p.circle(sx, sy, r);
    }

    this.p.pop();
  }
}
