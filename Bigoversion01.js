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


let timer;
starTimer()
function starTimer(){
    clearInterval(timer)
    timer = setInterval(() => {
    if(aplo == 0){
        let index = ArrId.indexOf(__lastFirstRemark)
        if(ArrBan[index]==''||ArrTeg[index]=='result_ignore'){FIgnor()}
        if(ArrBan[index].includes('Self-harm, Suicide, and Dangerous Acts')){EventBanClick( 0, 'Self-harm, Suicide, and Dangerous Acts',ArrTeg[index])}
        else{
            let zindex = ArrBan[index].split(',').at(-1).trim()
            EventBanClick(0,zindex,ArrTeg[index])
        }
    }
},interval);
}

function EventBanClick(color, sp1, tegol) {
    if(tegol == 'result_live_reform'||tegol== 'result_isolate_push'){
        let btnSreen = document.querySelector('.pos-1-2')
        let btnInsolate = document.querySelector('.pos-1-4')
        if(btnSreen){
            btnSreen.click()
        }else{
            btnInsolate.click()
        }
    }else{
        const punishButton = document.querySelector('.color_red_live')
        punishButton.click();
    }
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
            colorDOT(color)
        }, 300);
    }, 300);
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

let seans = 1
let timeSwap = 5
    setTimeout(() => {
        if(document.querySelector('.pos-3-4')){timeSwap = 5}else{timeSwap = timeSwap - 1}
        if(timeSwap <= 0|| seans == 1){level(1);seans = 2}
        if(timeSwap <= 0|| seans == 2){level(2);seans = 3}
        if(timeSwap <= 0|| seans == 3){level(3);seans = 4}
        if(timeSwap <= 0|| seans == 4){dedicated()}
    },7000);
   


async function level(numLev){
    try {
        document.querySelector('.ant-btn-danger').click()
    } catch{
        
    }

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    document.querySelectorAll('.ant-select-allow-clear')[1].click()
    await wait(1000);

    let elements = document.querySelectorAll('.ant-select-dropdown-menu-item');
    if(elements){
        let element = [...elements].find(el => el.textContent.trim() === 'level_'+numLev);
        element.click()
    }else{
        await wait(5000)
        let elements = document.querySelectorAll('.ant-select-dropdown-menu-item');
        let element = [...elements].find(el => el.textContent.trim() === 'level_'+numLev);
        element.click()
    }
    
    document.querySelectorAll('.ant-select-selection__rendered')[3].click()
    await wait(500)
    let btn = [...document.querySelectorAll('button')]
    .find(el => el.textContent.trim() === 'Select all');
    btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await wait(5000)
    document.querySelectorAll('.bnt-input')[0].click()
    await wait(400)
    document.querySelectorAll('.ant-checkbox-input')[1].click()
    await wait(500)
    document.querySelectorAll('.ant-btn-icon-only')[0].click()
    await wait(500)
    let btns = document.querySelectorAll('.ant-btn-primary');
    let btnOk = [...btns].find(el => el.textContent.trim() === 'Ok');
    let btnStart = [...btns].find(el => el.textContent.trim() === 'Start');
    btnOk.click()
    btnStart.click()
}
async function dedicated(){
    try {
        document.querySelector('.ant-btn-danger').click()
    } catch{
        
    }

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    document.querySelectorAll('.ant-select-allow-clear')[1].click()
    await wait(1000);

    let elements = document.querySelectorAll('.ant-select-dropdown-menu-item');
    if(elements){
        let element = [...elements].find(el => el.textContent.trim() === 'Dedicated Review');
        element.click()
    }else{
        await wait(5000)
        let elements = document.querySelectorAll('.ant-select-dropdown-menu-item');
        let element = [...elements].find(el => el.textContent.trim() === 'Dedicated Review');
        element.click()
    }
    
    document.querySelectorAll('.ant-select-selection__rendered')[3].click()
    await wait(500)
    let btn = [...document.querySelectorAll('button')]
    .find(el => el.textContent.trim() === 'Select all');
    btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    
    await wait(5000)
    document.querySelectorAll('.bnt-input')[0].click()
    await wait(300)
    document.querySelectorAll('.ant-checkbox-input')[0].click()
    await wait(300)
    document.querySelectorAll('.ant-checkbox-input')[1].click()
    await wait(300)
    document.querySelectorAll('.ant-btn-icon-only')[0].click()
    await wait(500)
    document.querySelectorAll('.ant-select-selection__rendered')[4].click()
    await wait(500)
    let hincomes = document.querySelectorAll('.ant-select-dropdown-menu-item');
    let hincome = [...hincomes].find(el => el.textContent.trim() === '高价值用户high-income user');
    hincome.click()
    let btns = document.querySelectorAll('.ant-btn-primary');
    let btnOk = [...btns].find(el => el.textContent.trim() === 'Ok');
    let btnStart = [...btns].find(el => el.textContent.trim() === 'Start');
    btnOk.click()
    btnStart.click()
}
}


    

   
