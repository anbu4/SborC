let inputIgnor = prompt("QA Voice Ignore");
let IgnorArr = inputIgnor
    .split("\n")
    .map(x => x.trim())
    .filter(x => x !== "");
alert(IgnorArr.length)
let inputOther = prompt("QA Voice Other(E)");
let OtherArr = inputOther
    .split("\n")
    .map(x => x.trim())
    .filter(x => x !== "");
alert(OtherArr.length)
let inputC = prompt("QA Voice C");
let CArr = inputC
    .split("\n")
    .map(x => x.trim())
    .filter(x => x !== "");
alert(CArr.length)

let aplo = 1
let id = ''
setInterval(function () {
    const elements = document.querySelectorAll('strong')
        elements.forEach(el => {
            if (el.textContent.trim() === "Post ID") {
                id = el.parentElement.querySelector('span').innerText
            }
        });
  
     if (CArr?.includes(id) && aplo == 0) {
          document.querySelectorAll('.mb10')[7].click()
          setTimeout(function () {
              document.querySelectorAll('.mb10')[15].click()
              setTimeout(function(){
                  document.querySelectorAll('.ant-btn-primary')[4].click()
              },900)
            },400)
    } 
    if (OtherArr?.includes(id) && aplo == 0) {
          document.querySelectorAll('.mb10')[12].click()
           setTimeout(function(){
                document.querySelectorAll('.ant-btn-primary')[3].click()
            },900)
    }
    if (IgnorArr?.includes(id) && aplo == 0) {
        document.querySelector('.one-line-btn').click()
           setTimeout(function(){
                document.querySelectorAll('.ant-btn-primary')[3].click()
            },900)
    }
},8500)


document.addEventListener('keydown',function (e) {
      if(e.key == '*'){
          aplo = 0
      }
      if(e.key == '/'){
          aplo = 1
      }
      if(e.key === '3'){
            document.querySelector('.btn-control').click()
        }
        if(e.key === '1'){
            document.querySelectorAll('.mb10')[12].click()
    }
    if(e.key ==='2'){
        document.querySelector('.one-line-btn').click()
    }
    if(e.key == '0'){
        document.querySelectorAll('.mb10')[7].click()
        setTimeout(function () {
            document.querySelectorAll('.mb10')[14].click()
        },400)
    }
    if(e.key == '.'){
        document.querySelectorAll('.mb10')[7].click()
        setTimeout(function () {
            document.querySelectorAll('.mb10')[15].click()
        },400)
    }
})
