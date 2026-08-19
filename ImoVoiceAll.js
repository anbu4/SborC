if (document.querySelector('.user-dropdown-menu').innerText.includes('0006')||
    document.querySelector('.user-dropdown-menu').innerText.includes('0028')) {

let inputId = prompt("QA ID");
const ArrId = inputId
    .split(/\r?\n/)
alert(ArrId.length)

let inputBan = prompt("QA Ban");
const ArrBan = inputBan
    .split(/\r?\n/)
alert(ArrBan.length)

let aplo = 1
let id = ''
setInterval(function () {
    const elements = document.querySelectorAll('strong')
        elements.forEach(el => {
            if (el.textContent.trim() === "Post ID") {
                id = el.parentElement.querySelector('span').innerText
            }
        });
        if(aplo == 0){
            let index = ArrId.indexOf(id)
            if(ArrBan[index]=='Abusing/Threatening, Mild Abuse(D)'){BanD()}
            if(ArrBan[index]=='Abusing/Threatening, Severe Abuse(C)'){BanC()}
            if(ArrBan[index]=='Other Language(E)'){BanOther()}
            if(ArrBan[index]=='Personal Info(C)'){BanPersonC()}
            if(ArrBan[index]=='Pornography, Moaning (B)'){BanMoning()}
            if(ArrBan[index]=='Pornography, Sexual Chat (B)'){BanSexChat()}
            if(ArrBan[index]=='ignore'){iIgnor()}
        }
  
},4500)


function BanD(){
     document.querySelectorAll('.mb10')[7].click()
          setTimeout(function () {
              document.querySelectorAll('.mb10')[14].click()
              setTimeout(function(){
                  const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
              },900)
            },400)
}
function BanC(){
    document.querySelectorAll('.mb10')[7].click()
          setTimeout(function () {
              document.querySelectorAll('.mb10')[15].click()
              setTimeout(function(){
                  const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
              },900)
            },400)
}
function BanOther(){
    document.querySelectorAll('.mb10')[12].click()
           setTimeout(function(){
                const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
            },900)
}
function BanPersonC(){
    document.querySelectorAll('.mb10')[9].click()
           setTimeout(function(){
                const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
            },900)
}
function BanMoning(){
     document.querySelectorAll('.mb10')[1].click()
        setTimeout(function () {
            document.querySelectorAll('.mb10')[16].click()
            setTimeout(function(){
                  const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
              },900)
        },400)
}
function BanSexChat(){
    document.querySelectorAll('.mb10')[1].click()
        setTimeout(function () {
            document.querySelectorAll('.mb10')[15].click()
            setTimeout(function(){
                  const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
              },900)
        },400)
}
function iIgnor(){
    document.querySelector('.one-line-btn').click()
           setTimeout(function(){
                const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
            },900)
}



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
    if(e.key == ' '){
        aplo = 1
        let index = ArrId.indexOf(id)
        alert(ArrBan[index])
        console.log(ArrBan[index])
      }
})

}
