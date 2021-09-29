import { gsap } from 'gsap';


/**
* アニメーションさせるオブジェクトに関するクラス
*/
class AnimateObject {
  // 対象のオブジェクト
  target: Element | null;
  // easingの具合(どの程度緩やかにmoveさせるか)
  ease: number;
  // 変位のベクトル
  easeVector: number;

  // マウスの基準点の座標
  mouseX = 0;
  mouseY = 0;

  // マウスの現在の座標
  currentX = 0;
  currentY = 0;

  /**
  * アニメーションさせる対象とeasingの設定
  * @param {string} _target アニメーションさせる対象のクラス
  * @param {number} _ease easingの度合いを表す値
  * @param {number} _easeVector 変位のベクトル
  */
  constructor(
    _target: string,
    _ease: number,
    _easeVector: number
  ) {
    this.target = document.querySelector(_target);
    this.ease = _ease;
    this.easeVector = _easeVector;
  }

  /**
  * カーソルの原点をウィンドウの中心にする(元々は左上)
  * @param {MouseEvent} e イベントハンドラ
  */
  mouseMove = (e:MouseEvent) => {
    this.mouseX = e.clientX - (window.innerWidth / 2);
    this.mouseY = e.clientY - (window.innerHeight / 2);
  }

  /**
  * アニメーションをさせる
  */
  doAnimate = () => {
    document.addEventListener('mousemove', this.mouseMove);
    window.requestAnimationFrame(this.tick);
  }

  /**
  * 再描画するためのメソッド
  */
  tick = () => {
    //カーソルの座標(現在位置に動いた距離を加算して座標に反映)
    this.currentX += (this.mouseX - this.currentX) * this.ease;
    this.currentY += (this.mouseY - this.currentY) * this.ease;
    gsap.set(this.target, {
      //オブジェクトの座標(カーソルが動いた後の座標を基点としている。)
      x: this.currentX * this.easeVector,
      y: this.currentY * this.easeVector,
    });
    window.requestAnimationFrame(this.tick);
  }


}

const city = new AnimateObject('.city', 0.1, 0);
city.doAnimate();
const drone = new AnimateObject('.drone', 0.1, 0.03);
drone.doAnimate();
const online = new AnimateObject('.online', 0.1, 0.04);
online.doAnimate();
const money = new AnimateObject('.money', 0.1, 0.03);
money.doAnimate();
const financial = new AnimateObject('.financial', 0.1, -0.12);
financial.doAnimate();
const vr = new AnimateObject('.vr', 0.07, -0.2);
vr.doAnimate();
const mobile = new AnimateObject('.mobile', 0.1, -0.08);
mobile.doAnimate();
const error = new AnimateObject('.error', 0.1, -0.06);
error.doAnimate();
const calender = new AnimateObject('.calender', 0.1, 0.03);
calender.doAnimate();
const social = new AnimateObject('.social', 0.1, -0.05);
social.doAnimate();