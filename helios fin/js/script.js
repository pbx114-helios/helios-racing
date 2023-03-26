const header = document.querySelector("header");
window.addEventListener ("scroll" , function() {
    header.classList.toggle("sticky" , window.scrollY > 100);
})

function team(){
    document.getElementById('teams').style.color="#088178"
    document.getElementById('homes').style.color='#ccc'
    document.getElementById('abouts').style.color='#ccc'
}

function home(){
    document.getElementById('teams').style.color="#ccc"
    document.getElementById('homes').style.color='#088178'
    document.getElementById('abouts').style.color='#ccc'
}

function about(){
    document.getElementById('teams').style.color="#ccc"
    document.getElementById('homes').style.color='#ccc'
    document.getElementById('abouts').style.color='#088178'
}