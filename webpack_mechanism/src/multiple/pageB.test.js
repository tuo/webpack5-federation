const rewire = require("rewire")
const pageB = rewire("./pageB")
const utilC = pageB.__get__("utilC")
// @ponicode
describe("utilC", () => {
    test("0", () => {
        let callFunction = () => {
            utilC()
        }
    
        expect(callFunction).not.toThrow()
    })
})
