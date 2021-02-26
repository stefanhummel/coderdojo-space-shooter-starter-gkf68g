import p5 from "p5";
import { Asteroid } from "./asteroid";
import { collideCirclePoly } from "p5collide";

export class Spaceship {
  private static image: p5.Image;

  static preload(p: p5) {
    Spaceship.image = p.loadImage(
      "https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/img/spaceship.png"
    );
  }

  constructor(private p: p5, public x: number, public y: number) {}

  draw() {
    this.p.push();
    this.p.translate(this.x, this.y);
    this.p.image(Spaceship.image, -30, -47, 60, 94);
    this.p.pop();
  }

  getPolygon(p: p5) {
    let spaceshipPolygon: p5.Vector[] = [];
    this.addPointToPolygon(spaceshipPolygon, 0, -50, p);
    this.addPointToPolygon(spaceshipPolygon, 20, -30, p);
    this.addPointToPolygon(spaceshipPolygon, 20, 0, p);
    this.addPointToPolygon(spaceshipPolygon, 25, 40, p);
    this.addPointToPolygon(spaceshipPolygon, -25, 40, p);
    this.addPointToPolygon(spaceshipPolygon, -20, 0, p);
    this.addPointToPolygon(spaceshipPolygon, -20, -30, p);
    //this.drawPolygon(spaceshipPolygon, p);

    return spaceshipPolygon;
  }

  private addPointToPolygon(polygon, x, y, p: p5) {
    p.push();
    polygon.push(p.createVector(this.x + x, this.y + y));
    p.pop();
  }

  private drawPolygon(polygon: p5.Vector[], p: p5) {
    this.p.stroke("lightgreen");
    this.p.fill("pink");
    this.p.beginShape();
    this.p.vertex(polygon[0].x, polygon[0].y);
    this.p.vertex(polygon[1].x, polygon[1].y);
    this.p.vertex(polygon[2].x, polygon[2].y);
    this.p.vertex(polygon[3].x, polygon[3].y);
    this.p.vertex(polygon[4].x, polygon[4].y);
    this.p.vertex(polygon[5].x, polygon[5].y);
    this.p.vertex(polygon[6].x, polygon[6].y);
    this.p.endShape(p.CLOSE);
  }

  isCollidingWithAsteroids(p: p5, asteroids: Asteroid[]): boolean {
    const spaceshipPolygon = this.getPolygon(p);
    for (let i = 0; i < asteroids.length; i++) {
      if (
        collideCirclePoly(
          asteroids[i].x,
          asteroids[i].y,
          asteroids[i].size,
          spaceshipPolygon
        )
      ) {
        return true;
      }
    }
  }
}
