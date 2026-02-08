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
document.body.appendChild(block);
if(document.querySelector('.user-dropdown-menu').innerText.includes('0033') ||
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
  document.addEventListener('keydown',function (e) {
      if(e.key == ' '){
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