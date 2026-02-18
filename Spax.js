let input = prompt("QA Hotlife ban");
let ids = input
    .split("\n")
    .map(x => x.trim())
    .filter(x => x !== "");
let searchNum = 7
console.log(ids);
alert(ids.length)
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
if(document.querySelector('.user-dropdown-menu').innerText.includes('0003') ||
document.querySelector('.user-dropdown-menu').innerText.includes('0007')){
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
setInterval(function () {
    if (ids?.includes(__lastFirstRemark)) {
        if(searchNum < 7){
            document.querySelectorAll('.ant-btn-primary')[0].click()
            searchNum = searchNum + 1
        }
    } else if (aplo == 0) {
        const btn = document.querySelector('.pos-3-4')
        btn?.click()
    }
},3000)
  document.addEventListener('keydown',function (e) {
      if(e.key == '*'){
          aplo = 0
      }
      if(e.key == '-'){
          searchNum = 0
      }
      if(e.key == '/'){
          aplo = 1
      }
      if(e.key == ' '){
        aplo = 1
        navigator.clipboard.writeText(__lastFirstRemark).then(() => {
          block.style.backgroundColor = "green";
          setTimeout(() => {
            block.style.backgroundColor = "grey";
          },2000); 
        }).catch(err => {
            block.style.backgroundColor = "red";
          setTimeout(() => {
            block.style.backgroundColor = "grey";
          },2000); 
        });
      }
     
  })
}
