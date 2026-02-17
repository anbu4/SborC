let input = prompt("QA Voice (c)");
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
        document.querySelectorAll('.mb10')[7].click()
        setTimeout(function () {
            document.querySelectorAll('.mb10')[15].click()
            getOKButton()
        },400)

    }
},4000)
function getOKButton() {
    const buttons = document.querySelectorAll('button.ant-btn-primary');
    for (let btn of buttons) {
        const span = btn.querySelector('span');
        if (
            span &&
            (span.textContent.trim() === 'OK' || span.textContent.trim() === 'ОК') &&
            !btn.disabled
        ) {
            return btn;
        }
    }
    return null;
}
document.addEventListener('keydown',function (e) {
      if(e.key == '*'){
          aplo = 0
      }
      if(e.key == '/'){
          aplo = 1
      }
})
