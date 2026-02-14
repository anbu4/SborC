// ==UserScript==
// @name         test-dat loader
// @namespace    anbu4-test-dat
// @description  Load script from GitHub RAW (bypass CSP)
// @match        https://global-oss-sg.uhgzgnb.com/v2/front_end/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

let Activeted = 0
document.addEventListener('keydown',function(e){
    if(e.key == 'p'){
        Activeted += 1
        if(Activeted == 3){
            let value = prompt()
            Activeted = 0
            if(value == 'voice'){
               ImportScript('BigoVoice.js')
            }
            if(value == 'spa'){
               ImportScript('Space.js')
            }
            if(value == 'laylo'){
               ImportScript('BigoVoiceQA.js')
            }
            if(value == 'enter'){
               ImportScript('Enter.js')
            }
            if(value == 'hotx'){
               ImportScript('Hotlife.js')
            }
        }
    }else{Activeted = 0}
})
function ImportScript(file){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://raw.githubusercontent.com/anbu4/SborC/main/"+ file,
        onload: function (response) {
          try {
            eval(response.responseText);
          } catch (e) {
            console.error("Eror import", e);
          }
        },
        onerror: function () {
          console.error("Eror");
        }
      });
}