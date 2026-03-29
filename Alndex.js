if (document.querySelector('.user-dropdown-menu').innerText.includes('0003') ||
    document.querySelector('.user-dropdown-menu').innerText.includes('0007')) {
let inputId = prompt("QA ID");
const ArrId = inputId
    .split(/\r?\n/)
alert(ArrId.length)

let inputBan = prompt("QA Ban");
const ArrBan = inputBan
    .split(/\r?\n/)
alert(ArrBan.length)

const block = document.createElement("div");
const user = document.querySelector('.user-dropdown-menu').innerText
Object.assign(block.style, {
  position: "fixed",      
  top: "15px",
  right: "15px",
  zIndex: "9999",      
  width: "30px",
  height: "30px",
  borderRadius: "50%",
});
block.style.backgroundColor = "grey";
let aplo = 1
document.body.appendChild(block);
(function () {
    const oldLog = console.log;
    console.log = function (...args) {
      try {
        for (const arg of args) {
          if (arg && typeof arg === 'object' && 'postId' in arg) {
            window.__lastFirstRemark = arg.postId;
            console.warn('📌 __lastFirstRemark:', arg.postId);
          }
        }
      } catch (e) {}
      oldLog.apply(console, args);
    };
})();
document.addEventListener('keydown',function (e) {
      if(e.key == '*'){
          aplo = 0
      }
      if(e.key == '/'){
          aplo = 1
      }
      if(e.key == ' '){
        aplo = 1
        let index = ArrId.indexOf(__lastFirstRemark)
        alert(ArrBan[index])
      }
     
})

setInterval(() => {
    if(aplo = 0){

    }
},8000);
}
