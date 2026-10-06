setInterval(()=>{
document.querySelectorAll('.ant-btn-block')[1].click()
setTimeout(function(){
const elements = document.querySelectorAll('.ant-btn-primary')
elements.forEach(el => {
if (el.textContent.trim() == "OK") {
el.click()
}
})
},900)
},2000)
