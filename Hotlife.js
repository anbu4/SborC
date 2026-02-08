let log = document.createElement('div')
let ap = 0
let ran = 14000
log.style.cssText =` 
    display: flex;
  background: aqua;
  width: 100%;
  height: 10px;
  transition: all .5s;
  z-index: 90;
opacity: 0.6;
`;
document.querySelector('.ant-menu-submenu-open').appendChild(log)
document.addEventListener('keydown',function (e) {
    if(e.key === 'Enter'){
        document.querySelector('.pos-3-4').click()
    }
    if(e.key ==='+'){
        ap = 1
        log.style.display = 'none';
        console.log('break')
    }
 if(e.key ===' '){
        ap = 1
        log.style.display = 'none';
        console.log('break')
    }
    if(e.key === '-'){
        ap = 0
        log.style.setProperty("background", "aqua", "important");
        log.style.display = 'Flex';
  stam()
        console.log('zapusk')
    }
})
function stam() {
    let id = null
    id = setInterval(()=>{
        if(document.querySelector('.pos-3-4')){
            stan()
            clearInterval(id)
        }else{
            console.log('none')
        }
    },1000)
}
function stan() {
    ran = (Math.floor(Math.random()*(2 - 0 + 1))+0)*1000+5000
    setTimeout(function () {
    if(ap==0){
        setTimeout(function () {
            log.style.setProperty("background", "green", "important");
        },3500)
        
        setTimeout(function () {
            log.style.setProperty("background", "red", "important");
        },2000)
        setTimeout(function () {
            if(ap==0){
                log.style.setProperty("background", "aqua", "important");
                console.log('click')
                document.querySelector('.pos-3-4').click()
                console.clear()
                stam()
            }
        },5000)
        if(ap==0){
            log.style.setProperty("background", "blue", "important");
        }
    }
    },ran)
}
stam()