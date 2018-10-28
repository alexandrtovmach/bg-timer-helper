# bg-timer-helper

Mini-tool to leave JavaScript executions awake after window unfocused (mobile device screen turned off, browser tab switched to another)

## Content
1. [Description](#description)
2. [Get Started](#get-started)
	1. [React](#react)
3. [API](#api)

## Description
[Here](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified) described this problems for timeouts, and in the same article described the solution for it:

>Firefox 50 no longer throttles background tabs if a Web Audio API AudioContext is actively playing sound.

This small package initalize AudioContext on the page for [modern browsers](https://caniuse.com/#search=AudioContext) and using this `tricky way` all timers no throttling more. As easy as possible.

**WARNING!** Be careful and use this tool only if you really haven't any another ways, browser developers don't just put a lot of effort into optimizing and firstly try to experiment with:
- [WebWorkers](https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API)
- [requestAnimationFrame](https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame)


## Get Started

### Install
```
npm install --save bg-timer-helper
```
or with `yarn`
```
yarn add bg-timer-helper
```

### React
```
import BgTimerHelper from 'bg-timer-helper';

export default class App extends React.Component {
	constructor() {
    	super();
        this.bgTimerHelper = new BgTimerHelper();
    }
    
    componentDidMount() {
    	this.bgTimerHelper.enable();
    }
    
    componentWillUnmount() {
    	this.bgTimerHelper.disable();
    }
}
```

## API
#### Methods
```
enable(); // start playing audio
```
```
disable(); // stop playing audio
```
