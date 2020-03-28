Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

const getEventType = () => {
    let hasTouchscreen = 'ontouchstart' in window;
    let swipeStart;
    let swipeUp;
    let swipeMove;
    if(hasTouchscreen){
        swipeStart = 'touchstart';
        swipeUp = 'touchend';
        swipeMove = 'touchmove';
    }
    else{
        swipeStart = 'mousedown';
        swipeUp = 'mouseup';
        swipeMove = 'mousemove';
    }
    return{
        swipeStart,
        swipeUp,
        swipeMove,
    }
}

const slideHorizontally = (slider,speed) => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let mousePos;

    slider.addEventListener(getEventType().swipeStart, (e) => {
        /* Get mouse position */
        if(getEventType().swipeStart === "touchstart"){
            mousePos = e.changedTouches[0].pageX;
        }
        else{
            mousePos = e.clientX;
        }

        isDown = true;
        startX = mousePos - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener(getEventType().swipeUp, () => {
        isDown = false;
    });
    slider.addEventListener(getEventType().swipeMove, (e) => {
        /* Get mouse position */
        if(getEventType().swipeMove === "touchmove"){
            mousePos = e.changedTouches[0].pageX;
        }
        else{
            mousePos = e.clientX;
        }

        if(!isDown) return;
        e.preventDefault();
        const x = mousePos - slider.offsetLeft;
        const moveBy = (startX - x) * speed; 
        slider.scrollLeft = scrollLeft + moveBy;
    });
}

Object.method('swipeHorizontally', function (...args){
    if(args[0] !== undefined){
        slideHorizontally(Object,args[0]);
        return;
    }
    slideHorizontally(Object,1);
});

module.exports = {
    swipeHorizontally
};
