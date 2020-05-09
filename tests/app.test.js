describe("Swipe Test Index", () => {
    const swipePackage = require("../index.js");

    describe("GetEventType Test", () => {   
        let returnVal = {
            swipeStart : 'mousedown',
            swipeUp : 'mouseup',
            swipeMove : 'mousemove',
        }   
        it("returns an object", () => {    
            expect(swipePackage.getEventType()).toEqual(returnVal);        
        })
    })

    describe("SwipeHorizontally Test", () => {      
        it("returns true", () => {    
            let slider = document.getElementsByTagName("body")[0]
            expect(swipePackage.swipeHorizontally(slider,2)).toBe(true);        
        })
    })

    describe("SwipeVertically Test", () => {      
        it("returns true", () => {    
            let slider = document.getElementsByTagName("body")[0]
            expect(swipePackage.swipeVertically(slider,2)).toBe(true);        
        })
    })
})