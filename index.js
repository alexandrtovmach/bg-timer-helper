export default class BgTimerHelper {
  constructor() {
    this.aCtx = new AudioContext();
    this.track = this.aCtx.createConstantSource();
    this.gainNode = this.aCtx.createGain();
    this.gainNode.gain.value = 0.005;
    this.gainNode.connect(this.aCtx.destination);
  }

  enable() {
    this.track.connect(this.aCtx.destination);
  }

  disable() {
    this.track.disconnect(this.aCtx.destination);
  }
}