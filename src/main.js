import { render, router } from "./lib";
import './style.css'


// Router
router.on('/', function () {
  render("#app", () => `<h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Welcome to ECMA base project</h1>`)
})

router.resolve();

