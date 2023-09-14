// Module
const PI = 3.1412
// Export và export default
const circle_P = (r) => {
    return 2 * PI * r
}

const circle_S = (r) => {
    return PI * r * r
}

export {
    circle_P,
    circle_S
}

export default circle_P