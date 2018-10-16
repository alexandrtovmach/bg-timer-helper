export default class BgTimerHelper {
  constructor() {
    this.aCtx = new AudioContext();
    this.src = this.aCtx.createConstantSource();
    this.gainRef = this.aCtx.createGain();
    this.gainRef.gain.value = 0.01;
    this.src.connect(this.gainRef);
    this.gainRef.connect(this.aCtx.destination);
  }

  enable() {
    this.src.start();
  }

  disable() {
    this.src.stop();
  }
}