import { gsap } from 'gsap';

class AnimateObject {
  // 対象のオブジェクト
  target: Element | null;
  // 変位のスピード
  ease: number;
  // スピード
  easeMove: number;

  // マウスの基準点の座標
  mouseX: number = 0;
  mouseY: number = 0;

  // マウスの現在の座標
  currentX: number = 0;
  currentY: number = 0;

  constructor(_target: string, _ease: number, _easeMove: number) {
    this.target = document.querySelector(_target);
    this.ease = _ease;
    this.easeMove = _easeMove;
  }

  // 元々マウスの左上がマウスの原点になっているため、カーソルの原点をウィンドウの中心にする
  mouseMove = (e) => {
    this.mouseX = e.clientX - (window.innerWidth / 2);
    this.mouseY = e.clientY - (window.innerHeight / 2);
  }

  doAnimate(){
    document.addEventListener('mousemove', this.mouseMove);
    window.requestAnimationFrame(this.tick);
  }

  tick = () => {
    //カーソルの座標(現在位置に動いた距離を加算して座標に反映している。)
    this.currentX += (this.mouseX - this.currentX) * this.ease;
    this.currentY += (this.mouseY - this.currentY) * this.ease;
    gsap.set(this.target, {
      //オブジェクトの座標(カーソルが動いた後の座標を基点としている。)
      x: this.currentX * this.easeMove,
      y: this.currentY * this.easeMove,
    });
    window.requestAnimationFrame(this.tick);
  }


}

const object1 = new AnimateObject('.object1', 0.12, -0.1);
object1.doAnimate();
const object2 = new AnimateObject('.object2', 0.1, -0.13);
object2.doAnimate();
const object3 = new AnimateObject('.object3', 0.08, -0.16);
object3.doAnimate();
const object4 = new AnimateObject('.object4', 0.09, -0.19);
object4.doAnimate();
const object5 = new AnimateObject('.object5', 0.1, -0.22);
object5.doAnimate();
const object6 = new AnimateObject('.object6', 0.1, -0.25);
object6.doAnimate();
const object7 = new AnimateObject('.object7', 0.07, -0.28);
object7.doAnimate();
const object8 = new AnimateObject('.object8', 0.06, -0.31);
object8.doAnimate();
const object9 = new AnimateObject('.object9', 0.08, -0.35);
object9.doAnimate();
const object10 = new AnimateObject('.object10', 0.07, -0.38);
object10.doAnimate();