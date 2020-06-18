export function createDefaultModel() {
    return {
        display: "0",
        inputCache: ""
    }
}

const clone = (model) => {
    return {...model}
}

// const clone = (model) => model
export function setDisplay(model, displayValue) {
    let clonedModel = clone(model)
    clonedModel.display = String(displayValue);
    return clonedModel;
}

export function appendDisplay(model, displayValue) {
    let clonedModel = clone(model)
    if (clonedModel.display.match(/^0+$/)) {
        return setDisplay(model, displayValue)
    }
    if (displayValue === '.' && clonedModel.display.match(/\./)) {
        return clonedModel
    }
    return setDisplay(model, model.display + String(displayValue))
}

export function cacheOperation(model, operation) {
    let clonedModel = clone(model)
    clonedModel.inputCache += clonedModel.display + operation
    clonedModel.display = "0"
    return clonedModel
}

export function evaluate(model) {
    let clonedModel = clone(model)
    clonedModel.inputCache += clonedModel.display
    clonedModel.display = String(eval(clonedModel.inputCache))
    clonedModel.inputCache = ""

    return clonedModel
}

export function getDisplay(model) {
    return model.display
}

export function updateContext(context, fn, value) {
    const [getter, setter] = context;
    return setter(fn(getter, value))
}