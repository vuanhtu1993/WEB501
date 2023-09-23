const render = (container, component) => {
    document.querySelector(container).innerHTML = component()
}

// ...

export {
    render
}