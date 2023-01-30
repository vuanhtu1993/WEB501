import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import HomePage from './pages/home'

// Template string
// Import/Export
document.querySelector('#app').innerHTML = HomePage()
