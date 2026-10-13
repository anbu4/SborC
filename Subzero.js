console.log("SUBZERO GITHUB WORKS");


setInterval(() => {
    
const elements = document.querySelectorAll('.ant-select-selection__rendered')
elements.forEach(el => {
    if (el.textContent.trim() == "User Group" || el.querySelector('.ant-select-selection__placeholder').textContent.trim() == "User Group") {
        el.parentElement.remove()
    }
})

let nameUser = document.querySelector('.user-dropdown-menu').innerText.split(' ')[0]
let statusUser = ''


if(document.querySelector('.ant-btn-primary').innerText == "Start" || document.querySelector('.ant-btn-danger') == null){
    statusUser = 'stop.red'
}else if(document.querySelector('.ant-btn-danger').innerText == 'Stop'){
    statusUser = 'start.green'
}

fetch("https://script.google.com/macros/s/AKfycbxcxj86jMn2Bc3wgRI4sWhVfss6xuPA4QrlZ70B2RcV55ZvNhev3kYA-1EH-b4KOODn/exec", {
method: "POST",
mode: "no-cors",
body: JSON.stringify({
name: nameUser,
active: "active",
status: statusUser,
work: "none"
})
});
},10000);

