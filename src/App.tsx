import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FeatureOne from './FeatureOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>

        <h1>the first commit</h1>
        <h2>this the branch example</h2>
        <h3>this is the 3rd commit</h3>
        
      </div>
      <FeatureOne />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
