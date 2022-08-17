class ColorPicker {

    constructor() {
        ColorPicker.fetchColorFromLocalStorage()
    }

    static colorArray = ["black", "white", "whitesmoke", "brown", "maroon", "darkslategray", "darkslateblue", "blue", "gray", "red", "green", "purple", "orange", "aliceblue", "aquamarine", "crimson", "coral", "yellow", "darkkhaki", "goldenrod", "indianred", "pink", "silver", "teal", "tomato", "#313131", "#121212", "#3e3e3e", "#171717", "chocolate"]

    static putColorOnScreen() {
        for (let single_color of ColorPicker.colorArray) {
            document.querySelector(".colorContainer").insertAdjacentHTML("beforeend", `<div class="singleColorContainer" style=background:${single_color};></div>`)
        }
    }

    static pickColor(clickedElement) {
        if (clickedElement.target.classList.contains("singleColorContainer")) {
            document.body.style.background = clickedElement.target.style.background

            ColorPicker.saveColorToLocalStorage(clickedElement.target.style.background)
        }
    }

    static saveColorToLocalStorage(getColor) {
        localStorage.setItem("colour", getColor)
    }

    static fetchColorFromLocalStorage() {
        if (localStorage.getItem("colour") === null) {
            return;
        } else {
            let parseColorData = localStorage.getItem("colour")
            document.body.style.background = parseColorData
        }
    }
}

let firstInstanceOfClassColorPicker = new ColorPicker()

ColorPicker.putColorOnScreen()

document.querySelector(".colorContainer").addEventListener("click", clickedElement => ColorPicker.pickColor(clickedElement))