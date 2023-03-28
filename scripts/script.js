const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
})

function team() {
    document.getElementById('teams').style.color = "#ff4d05"
    document.getElementById('homes').style.color = 'white'
    document.getElementById('abouts').style.color = 'white'
}

function home() {
    document.getElementById('teams').style.color = "white"
    document.getElementById('homes').style.color = '#ff4d05'
    document.getElementById('abouts').style.color = 'white'
}

function about() {
    document.getElementById('teams').style.color = "white"
    document.getElementById('homes').style.color = 'white'
    document.getElementById('abouts').style.color = '#ff4d05'
}