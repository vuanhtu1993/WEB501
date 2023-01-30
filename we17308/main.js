import './style.css'
import HomePage from './pages/home'
import { render } from './lib'

// document.querySelector('#app').innerHTML = HomePage()
var app = document.querySelector("#app")

render(HomePage(), app)