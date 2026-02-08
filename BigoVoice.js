setInterval(() => {
    if(document.querySelector('.pos-3-4')){
        document.querySelector('.anticon-caret-right').click()
	document.querySelector('.fa-volume-up').click()
    }
},1200);


let maindiv = document.createElement('div')
for (let index = 0; index < 9; index++){
    let childbtn = document.createElement('button')
    maindiv.append(childbtn)
    childbtn.style.cssText =`
     display: flex;
  width: 100%;
  margin: 2px;
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  background: #1b2428;
  outline: none;
  border: none;
  color: white;
    `; 
}
maindiv.style.cssText =` 
   display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0;
    bottom: 0;
    z-index: 80;
    cursor: pointer;
`;
let divarr = maindiv.querySelectorAll('button')
divarr[0].innerText = 'Vulgar'
divarr[1].innerText = 'Porn'
divarr[2].innerText = 'Hiddin'
divarr[3].innerText = 'Swering'
divarr[4].innerText = 'Discus'
divarr[5].innerText = 'Gembling'
divarr[6].innerText = 'Fraud'
divarr[7].innerText = 'Accunt'
divarr[8].innerText = 'Suidsid'
document.body.append(maindiv)

divarr[0].addEventListener('click',function () {
    const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "Voice";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Pornography and Vulgarity');
        setTimeout(() => {
          const step2 = clickItemByText('Severe misconduct and inappropriate behavior');
          setTimeout(() => {
            const step3 = clickItemByText('Pornographic or vulgar content');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[1].addEventListener('click',function () {
    const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "voicee";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Pornography and Vulgarity');
        setTimeout(() => {
          const step2 = clickItemByText('Pornographic Trading');
          setTimeout(() => {
            const step3 = clickItemByText('Porn Gang、Pornographic traffic introduction、Prostitution');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[2].addEventListener('click',function () {
    const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "voice";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Behavioral Restrictions');
        setTimeout(() => {
          const step2 = clickItemByText('Severely Inappropriate Behavior');
          setTimeout(() => {
            const step3 = clickItemByText('Hidden camera or privacy leaks');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[3].addEventListener('click',function () {
     const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "VOICE";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Behavioral Restrictions');
        setTimeout(() => {
          const step2 = clickItemByText('Inappropriate behavior');
          setTimeout(() => {
            const step3 = clickItemByText('Insults/Swearing/Flipping the middle finger/Pranking others');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[4].addEventListener('click',function () {
     const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "voice.";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Pornography and Vulgarity');
        setTimeout(() => {
          const step2 = clickItemByText('Severe misconduct and inappropriate behavior');
          setTimeout(() => {
            const step3 = clickItemByText('Discussing sexual behavior, sexual organs, sexual techniques, sexual desire, or obscene language, and leading to private chat or 1v1 interactions');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[5].addEventListener('click',function () {
     const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "voicE";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Gambling Activities');
        setTimeout(() => {
          const step2 = clickItemByText('Suspected of gambling');
          setTimeout(() => {
            const step3 = clickItemByText('Real or virtual currency gambling bets, guiding gambling or promoting gambling websites');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[6].addEventListener('click',function () {
     const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "voise";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Platform Interests');
        setTimeout(() => {
          const step2 = clickItemByText('Bottom line fraud');
          setTimeout(() => {
            const step3 = clickItemByText('Impersonating official、Fraud、Blackmail、prison broadcasts');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[7].addEventListener('click',function () {
     const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "vOice";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
        const step1 = clickItemByText('Platform Interests');
        setTimeout(() => {
          const step2 = clickItemByText('Serious Fraud');
          setTimeout(() => {
            const step3 = clickItemByText('Account/Diamond Buying and Selling、Guide Offline Transactions、Malicious Refunds');
          }, 200);
        }, 200);
      }, 200);
    }, 200);

})
divarr[8].addEventListener('click',function () {
    const punishButton = document.querySelector('.color_red_live')
    punishButton.click();
    setTimeout(() => {
        const textArea = document.querySelector('textarea.ant-input');
        if (textArea) {
          const text = "Voise";
          let index = 0;
    
          function simulateTyping() {
            if (index < text.length) {
              textArea.value += text.charAt(index);
              index++;
              const event = new Event('input', { bubbles: true });
              textArea.dispatchEvent(event);
              setTimeout(simulateTyping, 200);
            }
          }
    
          simulateTyping();
        }
    }, 200);

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
          const step1 = clickItemByText('Violence and Crime');
          setTimeout(() => {
            const step2 = clickItemByText('Suicidal speech');
            setTimeout(() => {
              const step3 = clickItemByText('Talking about suicide');
            }, 200);
          }, 200);
        }, 200);
      }, 200);
})
addEventListener('keydown',function(e){
  if(e.key == '-'){
    maindiv.style.display = 'flex'
  }
  if(e.key == '+'){
    maindiv.style.display = 'none'
  }
})