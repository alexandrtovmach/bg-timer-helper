export default class BgTimerHelper {
  constructor() {
    this.audioContext = new AudioContext();
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0.0001;
    gainNode.connect(this.audioContext.destination);
  }

  enable() {
    this.source = this.audioContext.createOscillator();
    this.source.frequency.setValueAtTime(0.0001, this.audioContext.currentTime);
    this.source.connect(this.audioContext.destination);
    this.source.start();
  }

  disable() {
    this.source.stop();
    this.source.disconnect(this.audioContext.destination);
  }
}