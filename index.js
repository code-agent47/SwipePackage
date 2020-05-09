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

const swipeHorizontally = (slider,speed) => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let mousePos;

    slider.addEventListener(getEventType().swipeStart, (e) => {
        /* Get mouse position based on event type*/
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
        /* Get mouse position based on event type*/
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
    return true;
}

const swipeVertically = (slider,speed) => {
    let isDown = false;
    let startX;
    let scrollTop;
    let mousePos;

    slider.addEventListener(getEventType().swipeStart, (e) => {
        /* Get mouse position */
        if(getEventType().swipeStart === "touchstart"){
            mousePos = e.changedTouches[0].pageY;
        }
        else{
            mousePos = e.clientY;
        }

        isDown = true;
        startX = mousePos - slider.scrollTop;
        scrollTop = slider.scrollTop;
    });
    slider.addEventListener(getEventType().swipeUp, () => {
        isDown = false;
    });
    slider.addEventListener(getEventType().swipeMove, (e) => {
        /* Get mouse position */
        if(getEventType().swipeMove === "touchmove"){
            mousePos = e.changedTouches[0].pageY;
        }
        else{
            mousePos = e.clientY;
        }

        if(!isDown) return;
        e.preventDefault();
        const x = mousePos - slider.scrollTop;
        const moveBy = (startX - x) * speed; 
        slider.scrollTop = scrollTop + moveBy;
    });
    return true;
}

module.exports = {
    swipeHorizontally,
    swipeVertically,
    getEventType
};
