import p5 from "p5";

export class Shots {
  private static images: p5.Image[] = [];
  private available = 10;

  static preload(p: p5) {
    for (let i = 0; i <= 10; i++) {
      Shots.images.push(
        p.loadImage(
          "https://raw.githubusercontent.com/coderdojo-linz/coderdojo-linz.github.io/develop/static/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/assets/shots-" +
            i.toString() +
            ".png"
        )
      );
    }
  }

  constructor(private p: p5, public x: number, public y: number) {}

  set availableShots(value: number) {
    if (value > 10 || value < 0) return;
    this.available = value;
  }

  get availableShots() {
    return this.available;
  }

  draw() {
    if (Shots.images.length > 0)
      this.p.image(Shots.images[this.available], this.x, this.y, 150, 20);
  }
}
