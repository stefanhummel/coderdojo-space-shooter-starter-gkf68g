import p5 from "p5";

export class Explosion {
  private static images: p5.Image[] = [];
  public duration = 0;

  static preload(p: p5) {
    for (let i = 1; i <= 10; i++) {
      Explosion.images.push(
        p.loadImage(
          "https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/img/shot6_exp" +
            i.toString() +
            ".png"
        )
      );
    }
  }

  constructor(private p: p5, public x: number, public y: number) {}

  get reachedAnimationEnd(): boolean {
    return this.duration / 3 > 9;
  }

  draw() {
    this.p.push();
    this.p.translate(this.x, this.y);
    this.p.scale(2);
    let imgNumber = Math.min(9, Math.floor(this.duration / 3));
    this.p.image(Explosion.images[imgNumber], -24, -24, 48, 48);
    this.p.pop();
    this.duration++;
  }
}
