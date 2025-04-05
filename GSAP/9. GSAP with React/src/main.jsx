import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './Examples/1./App.jsx'
// import './Examples/1./index.css'

// import App from './Examples/2./App'
// import './Examples/2./index.css'

// import App from './Examples/3./App'
// import './Examples/3./index.css'

// import App from './Examples/4./App'
// import './Examples/4./index.css'

// import App from './Examples/5./App'
// import './Examples/5./index.css'

import App from './Examples/6./App'
import './Examples/6./index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 
  </StrictMode>,
)
