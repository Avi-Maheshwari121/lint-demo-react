// src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [bugsSquashed, setBugsSquashed] = useState(0)

  return (
    <div className="card">
      <h1>🧪 The Testing Lab 🧪</h1>
      <p>Welcome to the ultimate bug-squashing facility.</p>

      <div className="lab-station">
        {/* We use data-testid to make it easy for our tests to find this specific element */}
        <h2 data-testid="bug-counter">Bugs Squashed: {bugsSquashed}</h2>
        
        <button 
          onClick={() => setBugsSquashed(b => b + 1)}
        >
          💥 Squash a Bug 💥
        </button>

        {bugsSquashed >= 5 && (
          <p className="success-msg" style={{ color: 'green', fontWeight: 'bold' }}>
            Wow! You are a master QA engineer!
          </p>
        )}
      </div>
    </div>
  )
}

export default App