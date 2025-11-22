import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const DappledLight: QuartzComponent = () => {
  // Genera shutters con altezze variabili per effetto irregolare
  const shutterHeights = [
    2, 3, 2, 4, 2, 3, 5, 2, 3, 2, 4, 3, 2, 5, 3, 2, 4, 2, 3, 2, 5, 3, 2, 4, 2
  ]

  return (
    <div id="dappled-light">
      <div id="glow"></div>
      <div id="glow-bounce"></div>
      <div class="perspective">
        <div id="leaves"></div>
        <div id="blinds">
          <div class="shutters">
            {shutterHeights.map((height, i) => (
              <div class="shutter" style={{ height: `${height}px` }} key={i}></div>
            ))}
          </div>
          <div class="vertical">
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

DappledLight.css = `
#dappled-light {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

#glow {
  position: absolute;
  top: -20%;
  left: -10%;
  width: 60%;
  height: 60%;
  background: radial-gradient(ellipse at center, rgba(255, 250, 240, 0.15) 0%, transparent 70%);
  filter: blur(40px);
}

[saved-theme="dark"] #glow {
  background: radial-gradient(ellipse at center, rgba(255, 200, 100, 0.08) 0%, transparent 70%);
}

#glow-bounce {
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 40%;
  height: 40%;
  background: radial-gradient(ellipse at center, rgba(255, 250, 240, 0.1) 0%, transparent 70%);
  filter: blur(30px);
}

[saved-theme="dark"] #glow-bounce {
  background: radial-gradient(ellipse at center, rgba(255, 200, 100, 0.05) 0%, transparent 70%);
}

.perspective {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

#leaves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at 20% 20%, rgba(100, 140, 100, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(100, 140, 100, 0.02) 0%, transparent 40%);
}

[saved-theme="dark"] #leaves {
  background: radial-gradient(ellipse at 20% 20%, rgba(80, 120, 80, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(80, 120, 80, 0.03) 0%, transparent 40%);
}

#blinds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateX(5deg);
  transform-origin: top center;
}

.shutters {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  gap: 45px;
  padding: 20px 0;
}

[saved-theme="dark"] .shutters {
  gap: 25px;
}

.shutter {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
}

[saved-theme="dark"] .shutter {
  background-color: rgba(0, 0, 0, 0.12);
}

.vertical {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
}

.bar {
  width: 2px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.02);
}

[saved-theme="dark"] .bar {
  background-color: rgba(0, 0, 0, 0.08);
}
`

export default (() => DappledLight) satisfies QuartzComponentConstructor
