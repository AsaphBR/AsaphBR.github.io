let tnsslider1 = tns({
    container : ".mySlider1",
    "slideBy" : "1",
    "speed" : 100,
    "nav" : false,
    autoplay : true,
    controls : false,
    autoplayButtonOutput: false,
    arrowKeys : true,
    mouseDrag : true,
    responsive : {
        1100: {
            items : 3,
            gutter : 20
        },

        768: {
            items : 2,
            gutter : 20
        },

        480: {
            items : 1,
            gutter : 20
        }

    }
});

document.addEventListener("touchstart", function() {}, true);