import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootEl = document.getElementById('root') as HTMLElement | null
// ensure hidden in case HTML didn't apply or was overridden
if (rootEl) rootEl.style.visibility = 'hidden'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl,
  // reveal when render completes
  () => {
    if (rootEl) rootEl.style.visibility = 'visible'
  }
)

// ...existing code...
reportWebVitals()
