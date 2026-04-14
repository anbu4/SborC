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
        console.log(ArrBan[index])
      }
     
})

setInterval(() => {
    if(aplo == 0){
        let index = ArrId.indexOf(__lastFirstRemark)
        if( ArrBan[index].includes('Abusive language')){EventBanClick( 0, 'Abusive language/Middle finger', 'Abusive language')}
        if( ArrBan[index].includes('Suggestive or Vulgar Speech')){EventBanClick( 0, 'Pornographic Speech', 'Suggestive or Vulgar Speech')}
        if( ArrBan[index].includes('Real or Virtual Gambling')){EventBanClick( 0, 'Gambling Activities', 'Real or Virtual Gambling')}
        if( ArrBan[index].includes('Discussion of Suicide')){EventBanClick( 0, 'Discussion of Suicide')}
        if( ArrBan[index].includes('Prostitution')){EventBanClick( 0, 'Porn Gang/Pornographic traffic introduction/Prostitution')}
        if( ArrBan[index].includes('Personal Contact')){EventBanClick( 0, 'Personal Information Disclosure', 'Personal Contact Information Disclosure')}
        if( ArrBan[index].includes('Explicit Sexual Speech')){EventBanClick( 0, 'Pornographic Speech', 'Explicit Sexual Speech')}
        if( ArrBan[index].includes('Livestreaming While Driving')){EventBanClick( 0, 'Livestreaming While Driving')}
        if( ArrBan[index].includes('Promotion Tobacco')){EventBanClick( 0, 'Smoking and Drinking Related', 'Smoking/Displaying/Promotion Tobacco')}
        if( ArrBan[index].includes('Female Lying Down')){EventBanClick( 0, 'Female Lying Down or Showering', 'Female Lying Down')}
        if( ArrBan[index].includes('Unauthorized Rebroadcasting')){EventBanClick( 0, 'Unauthorized Rebroadcasting')}
        // if( ArrBan[index].includes('')){}
       
       
        if( ArrBan[index]==''||ArrBan[index]==undefined){FIgnor()}
    }
},3500);
}
function EventBanClick(color, sp1, sp2, sp3) {
    const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const cascaderTrigger = document.querySelector('.ant-cascader-picker');
        cascaderTrigger.click();
        setTimeout(() => {
            const clickItemByText = (text) => {
                const item = Array.from(document.querySelectorAll('li.ant-cascader-menu-item'))
                    .find(el => el.textContent.trim() === text && !el.classList.contains('ant-cascader-menu-item-disabled'));
                if (item) {
                    item.click();
                    return true;
                }
                return false;
            };
            const step1 = clickItemByText(sp1);
            if (sp2 !== undefined) {
                setTimeout(() => {
                    const step2 = clickItemByText(sp2);
                    if (sp3 !== undefined) {
                        setTimeout(() => {
                            const step3 = clickItemByText(sp3);
                            colorDOT(color)
                        }, 200);
                    } else {
                        colorDOT(color)
                    }
                }, 200);
            } else {
                colorDOT(color)
            }



        }, 200);
    }, 200);
}
function colorDOT(colorI) { 
    setTimeout(() => {
        let item = document.querySelector('.violation-grades-input')
        item.querySelector('.ant-select-selection__rendered').click()
        setTimeout(() => {
            document.querySelectorAll('.color-dot')[colorI].click()
            setTimeout(() => {
                const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
            },1100);
        }, 300);
    }, 700);
}

function FIgnor (){
    const btn = document.querySelector('.pos-3-4')
    btn?.click()
    const btn1 = document.querySelector('.pos-4-4')
    btn1?.click()
                    
}
