if (document.querySelector('.user-dropdown-menu').innerText.includes('0003') ||
    document.querySelector('.user-dropdown-menu').innerText.includes('0007')) {

let sloName = ''
let devmod = 0
const request = indexedDB.open("MyDB", 1);

request.onupgradeneeded = function (e) {
    const db = e.target.result;

    if (!db.objectStoreNames.contains("data")) {
        db.createObjectStore("data", { keyPath: "id" });
    }
};

request.onsuccess = function (e) {
    const db = e.target.result;

    loadArray(db, "ArrId", "QA ID", (arr) => {
        ArrId = arr;
    });

    loadArray(db, "ArrBan", "QA Ban", (arr) => {
        ArrBan = arr;
    });

    loadArray(db, "ArrTeg", "Teg result", (arr) => {
        ArrTeg = arr;
    });
};

function loadArray(db, key, promptText, callback) {
    const tx = db.transaction("data", "readonly");
    const store = tx.objectStore("data");

    const req = store.get(key);

    req.onsuccess = function () {

        if (req.result) {
            callback(req.result.data);
        } else {

            let input = prompt(promptText);

            let arr = input.split(/\r?\n/);

            alert(arr.length);

            saveArray(db, key, arr);

            callback(arr);
        }
    };
}

function saveArray(db, key, arr) {
    const tx = db.transaction("data", "readwrite");
    const store = tx.objectStore("data");

    store.put({
        id: key,
        data: arr
    });
}


let interval = 4500;

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
        alert(__lastFirstRemark + '\n' + ArrBan[index]+'\n'+ArrTeg[index])
        let textCop = ArrBan[index].split(",").pop().trim()
        navigator.clipboard.writeText(textCop)
      }
      if(e.key == 'z'){
         sloName += 'z'
      }
      if(e.key == 'e'){
        sloName += 'e'  
      }
      if(e.key == 'b'){
       sloName += 'b'
      }
      if(e.key == 'o'){
        sloName += 'o'
       if(sloName == 'zebo'){
         let comand = prompt('Command')
        if(comand == 'into'){
            interval = prompt('num')
            starTimer()
        }
        if(comand == 'devmod'){
            devmod = 1
        }
        if(comand == 'none'){
            devmod = 0
            block.style.backgroundColor = "grey";
        }
       }else{
        sloName = ''
       }
      }
      if(e.key == 'Enter'&& devmod == 1 ){
            const btn = document.querySelector('.pos-3-4')
    btn?.click()
    const btn1 = document.querySelector('.pos-4-4')
    btn1?.click()
      }
      if(e.key == '`'){
        if(prompt('Delete base enter command Laylo') == '`'){
            indexedDB.deleteDatabase("MyDB");
        }
      }
     
})

setInterval(()=>{
    if(devmod == 1){
    let index = ArrId.indexOf(__lastFirstRemark)
     if(ArrBan[index]==''||ArrBan[index]==undefined){
        block.style.backgroundColor = "green";
    }else{
        block.style.backgroundColor = "red";
    }   
    }
},700)
let timer;
starTimer()
function starTimer(){
    clearInterval(timer)
    timer = setInterval(() => {
    if(aplo == 0|| devmod == 0){
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
        
        // if(devmod == 1){
        //     if( ArrBan[index]){EventBanClick( 0, 'LGBT-Related Content')}
        // }
    
        if( ArrBan[index]==''||ArrBan[index].includes('Not meeting the punish requirements')){FIgnor()}else if  (devmod == 1){
            let zindex = ArrBan[index].split(',').at(-1).trim()
            EventBanClick(0,zindex)
        }
    }
},interval);
}
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

