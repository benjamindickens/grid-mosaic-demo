import Mosaic from "grid-mosaic";

const mosaicContainer = document.querySelector(".mosaic");

const removePopupClasses = (element) => {
    element.classList.remove("beyond-right", "beyond-angle", "beyond-bottom")
}

const setPopupClasses = (element, container) => {

    const {bottom, right} = container.getBoundingClientRect();

    if ((element.offsetLeft + element.offsetWidth >= right) && (element.offsetTop >= bottom)) {
        element.classList.add('beyond-angle')
        return
    }
    if (element.offsetLeft + element.offsetWidth >= right * 0.6) {
        element.classList.add('beyond-right')
        return;
    }
    if (element.offsetTop >= bottom * 0.5) {
        element.classList.add('beyond-bottom')
        return;
    }
}

const mosaicOption = {
    breakpoint: 768,
    measure: "rem",
    maxSize: {
        desktop: {
            y: 3,
            x: 3,
        },
        mobile: {
            y: 3,
            x: 3,
        }
    },
    maxItems: {
        desktop: 7,
        mobile: 4
    },
    autoplay: {
        delay: 2500,
    },
    bg: true,
    bgStyles: {
        background: "skyblue",
        classes: ['_bg-1', '_bg-2', '_bg-3', '_bg-4', '_bg-5', '_bg-6', '_bg-7', '_bg-8', '_bg-9', '_bg-10', '_bg-11']
    },
    gaps: {
        desktop: .1,
        mobile: .1,
    },
    dimension: {
        desktop: {
            cols: 15,
            rows: 6,
            size: 9
        },
        mobile: {
            cols: 3,
            rows: 6,
            size: 9
        },
    },
    otherElements: [{
        el: document.querySelector(".js-caption"),
        coordinates: {
            desktop: [5, 1, 2, 7],
        }
    }],
    on: {
        mouseEnter(e) {
            setPopupClasses(e.currentTarget, mosaicContainer)
        },
        mouseLeave(e) {
            removePopupClasses(e.currentTarget);
        },
    }
}


const mosaic = new Mosaic(mosaicContainer, mosaicOption)

