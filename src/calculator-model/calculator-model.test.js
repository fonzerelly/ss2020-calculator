import { createDefaultModel, setDisplay, appendDisplay, cacheOperation, evaluate, getDisplay, updateContext } from '.'

describe('calculator-model', () => {
    describe('createDefaultModel', () => {
        it('should create a proper calculator model', () => {
            expect(createDefaultModel()).toEqual({
                display: "0",
                inputCache: ""
            })
        })
    })
    function cloneCheck (fn) {
        it('should clone model', () => {
            const initialModel = createDefaultModel();
            const resultingModel = fn(initialModel, "42")
            expect(resultingModel).not.toBe(initialModel)

        })
    }
    describe('setDisplay', () => {
        cloneCheck(setDisplay)

        it('should set value of display-field', () => {
            const initialModel = createDefaultModel()
            const resultingModel = setDisplay(initialModel, "42")
            expect(resultingModel.display).toEqual("42")
        })

        it('should turn passed in values to Strings', () => {
            const initialModel = createDefaultModel()
            const resultingModel = setDisplay(initialModel, 42)
            expect(resultingModel.display).toBe("42")
        })
    })
    describe('appendDisplay', () => {
        cloneCheck(appendDisplay);

        it('should extend display', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "42"
            const resultingModel = appendDisplay(initialModel, "1")
            expect(resultingModel.display).toEqual("421")
        })

        it('should ignore leading zero', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "0"
            const resultingModel = appendDisplay(initialModel, "1")
            expect(resultingModel.display).toEqual("1")
        })

        it('should allow only only one dot in display', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "3.14"
            const resultingModel = appendDisplay(initialModel, ".")
            expect(resultingModel.display).toEqual("3.14")
        })

        it('should allow only only one dot in display', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "3.14"
            const resultingModel = appendDisplay(initialModel, "1")
            expect(resultingModel.display).toEqual("3.141")
        })
    })
    describe('cacheOperation', () => {
        cloneCheck(cacheOperation);

        it('should set cache by display and operation', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "42"
            const resultingModel = cacheOperation(initialModel, "+")
            expect(resultingModel.inputCache).toEqual("42+")
        })

        it('should set cache by display and operation', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "42"
            initialModel.inputCache = "21+"
            const resultingModel = cacheOperation(initialModel, "*")
            expect(resultingModel.inputCache).toEqual("21+42*")
        })
        it('should set display to 0', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "42"
            const resultingModel = cacheOperation(initialModel, "*")
            expect(resultingModel.display).toEqual("0")
        })
    })
    describe("evaluate", () => {
        cloneCheck(evaluate);

        it('should cache display', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "22"
            initialModel.inputCache = "11+"
            const resultingModel = evaluate(initialModel)
            expect(resultingModel.inputCache).toEqual("11+22")
        })
        it('should set display to result', () => {
            const initialModel = createDefaultModel();
            initialModel.display = "22"
            initialModel.inputCache = "11+"
            const resultingModel = evaluate(initialModel)
            expect(resultingModel.display).toEqual("33")
        })
    })
    describe('getDisplay', () => {
        it("should return value of display", () => {
            const initialModel = createDefaultModel();
            initialModel.display = "22"
            expect(getDisplay(initialModel)).toEqual("22");
        })
    })
    describe('updateContext', () => {
        let fakeReactContext 
        beforeEach(() => {
            fakeReactContext= (defaultValue) => {
                return [
                    defaultValue,
                    jasmine.createSpy('fakeSetter')
                ]
            }
        })
        it('should apply a function to the getter of a react Context', () => {
            const updateFn = jasmine.createSpy('updateFn')
            const valueToUpdateBy = "100";
            updateContext(fakeReactContext("defaultValue"), updateFn, valueToUpdateBy)
            expect(updateFn).toHaveBeenCalledWith("defaultValue", valueToUpdateBy)
        })

        it('should apply a function to the getter of a react Context', () => {
            const fakeFn = jasmine.createSpy('fakeFn').and.returnValue("resultValue")
            const context = fakeReactContext("defaultValue")
            const setter = context[1]
            updateContext(context, fakeFn)
            expect(setter).toHaveBeenCalledWith("resultValue")
        })
    })
})