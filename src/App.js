import React, {
  Component
} from 'react';
import Background from './components/Background.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      angle: '-90deg',
      base: '',
      gradient: '',
      hue: 350,
      saturation: 100,
      lightness: 50,
      gradientHue: 100,
      gradientSaturation: 100,
      gradientLightness: 50
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHue = this.changeHue.bind(this);
    this.changeSaturation = this.changeSaturation.bind(this);
    this.changeLightness = this.changeLightness.bind(this);
    this.changeGradientHue = this.changeGradientHue.bind(this);
    this.changeGradientSaturation = this.changeGradientSaturation.bind(this);
    this.changeGradientLightness = this.changeGradientLightness.bind(this);
    
  }
  hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  handleSubmit() {
    let h = this.state.hue;
    let s = this.state.saturation;
    let l = this.state.lightness;
    let gh = this.state.gradientHue;
    let gs = this.state.gradientSaturation;
    let gl = this.state.gradientLightness;
    let base = this.hslToHex(h, s, l);
    let gradient = this.hslToHex(gh, gs, gl);
    this.setState({
      base: base,
      gradient: gradient  
    });
  }
  handleGradientSubmit() {
    let h = this.state.gradientHue;
    let s = this.state.gradientSaturation;
    let l = this.state.gradientLightness;
    let gradient = this.hslToHex(h, s, l);
    this.setState({gradient: gradient});
  }
  
  changeHue(e) {
    this.setState({hue: e.target.value});
    this.handleSubmit();
  }
  changeSaturation(e) {
    this.setState({saturation: e.target.value});
    this.handleSubmit();
  }
  changeLightness(e) {
    this.setState({lightness: e.target.value})
    this.handleSubmit();
  }
  changeGradientHue(e) {
    this.setState({gradientHue: e.target.value});
    this.handleSubmit();
  }
  changeGradientSaturation(e) {
    this.setState({gradientSaturation: e.target.value});
    this.handleSubmit();
  }
  changeGradientLightness(e) {
    this.setState({gradientLightness: e.target.value});
    this.handleSubmit();
  }

  componentWillMount() {
    this.handleSubmit();
  }

  render() {
    let angle = this.state.angle;
    let base = this.state.base;
    let gradient = this.state.gradient;
    let hue = this.state.hue;
    let saturation = this.state.saturation;
    let lightness = this.state.lightness;
    let gradientHue = this.state.gradientHue;
    let gradientSaturation = this.state.gradientSaturation;
    let gradientLightness = this.state.gradientLightness;
    return ( 
    <div>
      <Background 
        angle={angle}
        base={base}
        gradient={gradient}
      />
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Base Color</p>
          <div>
            <label>Hue {hue}</label>
            <input 
              type='range'
              value={hue}
              min='0'
              max='360'
              onBlur={this.changeHue}
              onChange={this.changeHue}
            />
          </div>
          <div>
            <label>Saturation {saturation}</label>
            <input 
              type='range'
              min='0'
              max='100'
              value={saturation}
              onBlur={this.changeSaturation}
              onChange={this.changeSaturation}
            />
          </div>
          <div>
            <label>Lightness {lightness}</label>
            <input
              type='range'
              min='0'
              max='100'
              value={lightness}
              onBlur={this.changeLightness}
              onChange={this.changeLightness}
            />
          </div>
        </div>
        <div>
          <p>Gradient Color</p>
          <div>
            <label>Hue {gradientHue}</label>
            <input 
              type='range'
              min='0'
              max='360'
              value={gradientHue}
              onBlur={this.changeGradientHue}
              onChange={this.changeGradientHue}
            />
          </div>
          <div>
            <label>Saturation {gradientSaturation}</label>
            <input 
              type='range'
              min='0'
              max='100'
              value={gradientSaturation}
              onBlur={this.changeGradientSaturation}
              onChange={this.changeGradientSaturation}
            />
          </div>
          <div>
            <label>Lightness {gradientLightness}</label>
            <input 
              type='range'
              min='0'
              max='100'
              value={gradientLightness}
              onBlur={this.changeGradientLightness}
              onChange={this.changeGradientLightness}
            />
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default App;