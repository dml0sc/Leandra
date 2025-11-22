import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const DappledLight: QuartzComponent = () => {
  // 25 shutters come in Zhao
  const shutters = Array(25).fill(null)

  return (
    <div id="dappled-light">
      <div id="glow"></div>
      <div id="glow-bounce"></div>
      <div class="perspective">
        <div id="blinds">
          <div class="shutters">
            {shutters.map((_, i) => (
              <div class="shutter" key={i}></div>
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
  pointer-events: none;
  position: fixed;
  height: 100%;
  width: 100%;
  isolation: isolate;
  --shadow: #1a1917;
  --bounce-light: #fffffc;
  --timing-fn: cubic-bezier(0.455, 0.19, 0, 0.985);
}

[saved-theme="dark"] #dappled-light {
  --shadow: #030307;
  --bounce-light: #1b293f;
}

#glow {
  position: absolute;
  background: linear-gradient(309deg, var(--bounce-light), var(--bounce-light) 20%, transparent);
  transition: background 1s var(--timing-fn);
  height: 100%;
  width: 100%;
  opacity: 0.5;
}

#glow-bounce {
  position: absolute;
  background: linear-gradient(355deg, var(--bounce-light) 0%, transparent 30%, transparent 100%);
  transition: background 1s var(--timing-fn);
  opacity: 0.5;
  height: 100%;
  width: 100%;
  bottom: 0;
}

.perspective {
  position: absolute;
  transition: transform 1.7s var(--timing-fn), opacity 4s ease;
  top: -30vh;
  right: 0;
  width: 80vw;
  height: 130vh;
  opacity: 0.07;
  background-blend-mode: darken;
  transform-origin: top right;
  transform-style: preserve-3d;
  transform: matrix3d(0.75, -0.0625, 0, 0.0008, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}

[saved-theme="dark"] .perspective {
  opacity: 0.3;
  transform: matrix3d(0.8333, 0.0833, 0, 0.0003, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}

#blinds {
  position: relative;
  width: 100%;
}

#blinds .shutter,
#blinds .bar {
  background-color: var(--shadow);
}

#blinds .shutter {
  width: 100%;
  height: 40px;
  transition: height 1s var(--timing-fn);
}

[saved-theme="dark"] #blinds .shutter {
  height: 80px;
}

#blinds .shutters {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 60px;
  transition: gap 1s var(--timing-fn);
}

[saved-theme="dark"] #blinds .shutters {
  gap: 20px;
}

#blinds > .vertical {
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

#blinds > .vertical > .bar {
  width: 12px;
  height: 100%;
}
`

export default (() => DappledLight) satisfies QuartzComponentConstructor
