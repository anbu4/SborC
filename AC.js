let input = prompt("QA Voice Ignore");
let ids = input
    .split("\n")
    .map(x => x.trim())
    .filter(x => x !== "");

console.log(ids);
alert(ids.length)
let aplo = 1
let id = ''
setInterval(function () {
    const elements = document.querySelectorAll('strong')
        elements.forEach(el => {
            if (el.textContent.trim() === "Post ID") {
                id = el.parentElement.querySelector('span').innerText
            }
        });
    if (ids?.includes(id) && aplo == 0) {
        document.querySelector('.one-line-btn').click()
           setTimeout(function(){
                document.querySelectorAll('.ant-btn-primary')[3].click()
            },800)
    }
},2000)
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
