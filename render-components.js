const menuOptions = document.querySelectorAll("nav a");
const rightPane = document.querySelector(".right-pane");

menuOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
        e.preventDefault();  // prevent page refresh
        if (option.textContent === "> About") {
            renderAbout()
        } else if (option.textContent === "> Projects") {
            renderProject()
        } else {
            renderREST()
        }
    })
})

function renderAbout() {
    rightPane.innerHTML = "<about-component></about-component>"
}

function renderProject() {
    rightPane.innerHTML = `
    <project-card></project-card>
    `
}

function renderREST() {
    rightPane.innerHTML = "<p>NOTHING GOES HERE</p>"
}