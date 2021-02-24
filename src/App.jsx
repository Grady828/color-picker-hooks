import React, { useState } from 'react'

export function App() {
  // state = {
  //   Hue: Math.floor(Math.random() * 360),
  //   Saturation: Math.floor(Math.random() * 100),
  //   Lightness: Math.floor(Math.random() * 100),
  // }

  const [Hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [Saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [Lightness, setLightness] = useState(Math.floor(Math.random() * 100))

  // hueHandler = (event) => {
  //   setState({
  //     Hue: event.target.value,
  //   })
  // }

  // satHandler = (event) => {
  //   this.setState({
  //     Saturation: event.target.value,
  //   })
  // }

  // lightHandler = (event) => {
  //   this.setState({
  //     Lightness: event.target.value,
  //   })
  // }

  function randomizer() {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

  return (
    <main>
      <h1
        style={{
          backgroundColor: `hsl(${Hue} , ${Saturation}% , ${Lightness}%`,
        }}
      >
        Color Picker
      </h1>

      <div>
        <label>
          <h2>
            Hue {Hue}
            <input
              type="range"
              onChange={(event) => setHue(event.target.value)}
              min="0"
              max="360"
              value={Hue}
            />
          </h2>

          <h2>
            Saturation {Saturation}
            <input
              type="range"
              onChange={(event) => setSaturation(event.target.value)}
              min="0"
              max="100"
              value={Saturation}
            />
          </h2>

          <h2>
            Lightness {Lightness}
            <input
              type="range"
              onChange={(event) => setLightness(event.target.value)}
              min="0"
              max="100"
              value={Lightness}
            />
          </h2>
        </label>
      </div>
      <footer>
        <button onClick={randomizer}> Randomize</button>
      </footer>
    </main>
  )
}
