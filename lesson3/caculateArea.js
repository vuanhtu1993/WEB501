import { log } from "./module.js"
const PI = 3.1412

function circleArea(r) {
    log(PI * r * r)
}

export {
    circleArea
}

export default circleArea