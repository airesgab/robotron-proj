const control = document.querySelectorAll("[data-control]")
const statistics = document.querySelectorAll("[data-statistics]")
const partstrength = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "velocity": -5
    },

    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "velocity": -20
    },
    "nucleus":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "velocity": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "velocity": 42
    },
    "rocket":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "velocity": -2
    }
}

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        dataManipulation(event.target.dataset.control, event.target.parentNode)
        dataStatistics(event.target.dataset.parts)
    })
})

function dataManipulation(operation, control) {
    const parts = control.querySelector("[data-counter]")
    if (operation === "-") {
        parts.value = parseInt(parts.value) - 1
    } else {
        parts.value = parseInt(parts.value) + 1
    }
} 

function dataStatistics(parts) {

    statistics.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + partstrength[parts][element.dataset.statistics]
    
    })
    }

    
