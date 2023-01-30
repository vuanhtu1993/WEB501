// Logging data
function logging(data) {
    console.info("Logging service:", data)
}

function privateService() {

}

// Cách 1
export {
    logging,
    privateService
}
// Cách 2
export default logging