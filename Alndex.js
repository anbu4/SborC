if (document.querySelector('.user-dropdown-menu').innerText.includes('0003') ||
    document.querySelector('.user-dropdown-menu').innerText.includes('0007')) {
let inputId = prompt("QA ID");
const ArrId = inputId
    .split(/\r?\n/)
alert(ArrId.length)

let inputBan = prompt("QA Ban");
const ArrBan = inputBan
    .split(/\r?\n/)
alert(ArrBan.length)

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
        alert(ArrBan[index])
        console.log(ArrBan[index])
      }
     
})

setInterval(() => {
    if(aplo == 0){
        let index = ArrId.indexOf(__lastFirstRemark)
        if( ArrBan[index]=='Behavioral Restrictions, Dangerous behavior, Live-streaming while driving, high-risk actions'){banDivingDanger()}
        if( ArrBan[index]=='Severe misconduct and inappropriate behavior, Pornography and Vulgarity, Pornographic or vulgar content'){banVulgar()}
        if( ArrBan[index]=='Severe misconduct and inappropriate behavior, Pornography and Vulgarity, Discussing sexual behavior, sexual organs, sexual techniques, sexual desire, or obscene language, and leading to private chat or 1v1 interactions'){banDiscus()}
        if( ArrBan[index]=='Insults/Swearing/Flipping the middle finger/Pranking others, Inappropriate behavior, Behavioral Restrictions'||
            ArrBan[index]=='Behavioral Restrictions, Inappropriate behavior, Insults/Swearing/Flipping the middle finger/Pranking others'){banSwering()}
        if( ArrBan[index]=='Behavioral Restrictions, Inappropriate behavior, LGBT/Transgender/Cross-dressing'){banLGBT()}
        if( ArrBan[index]=='Behavioral Restrictions, Severely Inappropriate Behavior, Hidden camera or privacy leaks'||
            ArrBan[index]=='Severely Inappropriate Behavior, Hidden camera or privacy leaks, Behavioral Restrictions'){banHiddin()}
        if( ArrBan[index]=='Behavioral Restrictions, Tobacco and alcohol, Smoking, drinking alcohol, displaying/trading cigarettes and alcohol'||
            ArrBan[index]=='Tobacco and alcohol, Smoking, drinking alcohol, displaying/trading cigarettes and alcohol, Behavioral Restrictions'){banSmoking()}
        if( ArrBan[index]=='Female sexual provocation (long duration), Pornography and Vulgarity, Female Erotic Shaking Behavior (For a long time), Violation of Secular Behavior'||
            ArrBan[index]=='Pornography and Vulgarity, Female sexual provocation (short duration), Female Erotic Shaking Behavior, Violation of Secular Behavior'||
            ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual provocation (long duration), Female Erotic Shaking Behavior (For a long time)'||
            ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual provocation (short duration), Female Erotic Shaking Behavior'){banShaking()}
        if( ArrBan[index]=='Minor Protection, Minors Violations, Minor appear alone'){banMelkiyOdin()}
        if( ArrBan[index]=='Minor Protection, Minor Related, Accompanied by minor'){banMelkiyVmeste()}
        if( ArrBan[index]=='Minor Protection, Minor Related, Displaying minors videos/images'){banMelkiyVideo()}
        if( ArrBan[index]=='Platform Interests, Content Infringement, The unauthorized rebroadcasting and recording.'){banRetranslatsiya()}
        if( ArrBan[index]=='Platform Interests, Inappropriate Promotion, Non-competitive product promotion、Display of competitive product information、Promotion of ordinary product sales advertisements'||
            ArrBan[index]=='Inappropriate Promotion, Platform Interests, Non-competitive product promotion、Display of competitive product information、Promotion of ordinary product sales advertisements'){banKankurentINSTA()}
        if( ArrBan[index]=='Pornographic Trading, Pornography and Vulgarity, Porn Gang、Pornographic traffic introduction、Prostitution'){banPornGang()}
        if( ArrBan[index]=='Pornography and Vulgarity, Exhibitionism and pornography, Exposure of genitals, female nipples, buttocks, pubic hair, and other sexually sensitive body parts, partial nudity or nudity that satisfies sexual desires'){banGenitali()}
        if( ArrBan[index]=='Pornography and Vulgarity, Female lying down or showering (no exposure of sensitive areas), Female Lying Down, Violation of Secular Behavior'||
            ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female lying down or showering (no exposure of sensitive areas), Female Lying Down'){banLejitOdin()}
        if( ArrBan[index]=='Pornography and Vulgarity, Pornographic content, Exposure of genital sensitive areas (genitals, female nipples, buttocks, pubic hair, etc.) in films/games/anime'){banGenitaliVideo()}
        if( ArrBan[index]=='Pornography and Vulgarity, Severe misconduct and inappropriate behavior, Female severe sexual provocation'){banJesti_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Severe misconduct and inappropriate behavior, Male severe sexual provocation'){banJesti_M()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female focus on sensitive areas (thighs, buttocks, lower body, chest)'){banFokus_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual innuendo, Female Seductive Posture'){banPoza_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual innuendo, Female Wetting Clothes'){banOdejdaMokraya_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual provocation (long duration), Female Grabbing Breast Outside the Clothes (For a long time)'||
            ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual provocation (short duration), Female Grabbing Breast Outside the Clothes'){banTrogatGrud_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual provocation (long duration), Female Intentionally Pull up Clothes(For a long time)'||
            ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Behavior, Female sexual provocation (short duration), Female Intentionally Pull up Clothes'){banOtyagivatOdejdu_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Dress, Female 1/2 cleavage, 2/3 cleavage, side breast, lower breast/triangle area, noticeable nipple, Female 2/3 Cleavage'||
            ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Dress, Female 1/3 Cleavage, Female 1/3 Cleavage'){ban1_3()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Dress, Female hot pants, cool clothing (exposing stomach, back, shoulders, camisole), Female cool clothing'||
            ArrBan[index]=='Violation of Secular Dress, Female hot pants, cool clothing (exposing stomach, back, shoulders, camisole), Female cool clothing, Pornography and Vulgarity'){banJivot_J()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Dress, Female suspected of not wearing a top or bottom, Female suspected of not wearing a bottom'){banDliniyVerx()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Dress, Female underwear, lingerie (uniforms, see-through outfits, hollowed-out clothing, etc.), Female Underwear'){banNijnieBelyo()}
        if( ArrBan[index]=='Pornography and Vulgarity, Violation of Secular Dress, Male Topless'||
            ArrBan[index]=='Violation of Secular Dress, Pornography and Vulgarity, Male Topless'){banTopless()}
        if( ArrBan[index]=='Talking about suicide, Suicidal speech, Violence and Crime'){banSuidsid()}
        if( ArrBan[index]=='Violence and Crime, Drug Trafficking and Abuse, Soft Drugs (Marijuana, Khat, Nitrous Oxide)'){banNarkotikLox()}
        if( ArrBan[index]==''||ArrBan[index]==undefined){FIgnor()}
    }
},5000);
}
function banSwering (){
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
                            const step1 = clickItemByText('Insults/Swearing/Flipping the middle finger/Pranking others');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banVulgar (){
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
                            const step1 = clickItemByText('Pornographic or vulgar content');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banPornGang (){
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
                            const step1 = clickItemByText('Porn Gang、Pornographic traffic introduction、Prostitution');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banHiddin (){
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
                            const step1 = clickItemByText('Hidden camera or privacy leaks');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banSmoking (){
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
                            const step1 = clickItemByText('Smoking, drinking alcohol, displaying/trading cigarettes and alcohol');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banSuidsid (){
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
                            const step1 = clickItemByText('Talking about suicide');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banDivingDanger (){
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
                            const step1 = clickItemByText('Live-streaming while driving, high-risk actions');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banLGBT (){
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
                            const step1 = clickItemByText('LGBT/Transgender/Cross-dressing');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banKankurentINSTA (){
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
                            const step1 = clickItemByText('Non-competitive product promotion、Display of competitive product information、Promotion of ordinary product sales advertisements');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banShaking (){
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
                            const step1 = clickItemByText('Female sexual provocation (short duration)');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Erotic Shaking Behavior');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banMelkiyOdin (){
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
                            const step1 = clickItemByText('Minor appear alone');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banMelkiyVmeste (){
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
                            const step1 = clickItemByText('Accompanied by minor');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banMelkiyVideo (){
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
                            const step1 = clickItemByText('Displaying minors videos/images');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banRetranslatsiya (){
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
                            const step1 = clickItemByText('The unauthorized rebroadcasting and recording.');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banGenitali (){
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
                            const step1 = clickItemByText('Exposure of genitals, female nipples, buttocks, pubic hair, and other sexually sensitive body parts, partial nudity or nudity that satisfies sexual desires');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banLejitOdin (){
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
                            const step1 = clickItemByText('Female lying down or showering (no exposure of sensitive areas)');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Lying Down');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banGenitaliVideo (){
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
                            const step1 = clickItemByText('Exposure of genital sensitive areas (genitals, female nipples, buttocks, pubic hair, etc.) in films/games/anime');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banJesti_J (){
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
                            const step1 = clickItemByText('Female severe sexual provocation');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banJesti_M (){
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
                            const step1 = clickItemByText('Male severe sexual provocation');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banFokus_J (){
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
                            const step1 = clickItemByText('Female focus on sensitive areas (thighs, buttocks, lower body, chest)');
                            setTimeout(() => {
                                        try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }

                                    }, 400)
                        }, 200);
                    }, 200);
}
function banPoza_J (){
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
                            const step1 = clickItemByText('Female sexual innuendo');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Seductive Posture');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banOdejdaMokraya_J (){
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
                            const step1 = clickItemByText('Female sexual innuendo');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Wetting Clothes');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banTrogatGrud_J (){
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
                            const step1 = clickItemByText('Female sexual provocation (short duration)');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Grabbing Breast Outside the Clothes');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banOtyagivatOdejdu_J (){
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
                            const step1 = clickItemByText('Female sexual provocation (short duration)');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Intentionally Pull up Clothes');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function ban1_3 (){
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
                            const step1 = clickItemByText('Female 1/3 Cleavage');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female 1/3 Cleavage');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banJivot_J (){
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
                            const step1 = clickItemByText('Female hot pants, cool clothing (exposing stomach, back, shoulders, camisole)');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female cool clothing');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banDliniyVerx (){
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
                            const step1 = clickItemByText('Female suspected of not wearing a top or bottom');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female suspected of not wearing a bottom');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banDiscus (){
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
                            const step1 = clickItemByText('Discussing sexual behavior, sexual organs, sexual techniques, sexual desire, or obscene language, and leading to private chat or 1v1 interactions');
                            setTimeout(() => {
                                 try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banNijnieBelyo (){
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
                            const step1 = clickItemByText('Female underwear, lingerie (uniforms, see-through outfits, hollowed-out clothing, etc.)');
                            setTimeout(() => {
                                const step2 = clickItemByText('Female Underwear');
                                setTimeout(() => {
                                   try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                }, 200);
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banTopless (){
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
                            const step1 = clickItemByText('Male Topless');
                            setTimeout(() => {
                                 try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }
                                      
                            }, 200)
                        }, 200);
                    }, 200);
}
function banNarkotikLox (){
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
                            const step1 = clickItemByText('Soft Drugs (Marijuana, Khat, Nitrous Oxide)');
                            setTimeout(() => {
                                 try {
                                            document.querySelector('.ant-radio-input[value="false"]').click()
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        } catch {
                                            const elements = document.querySelectorAll('.ant-btn-primary')
                                            elements.forEach(el => {
                                                if (el.textContent.trim() == "OK") {
                                                    el.click()
                                                }
                                            })
                                        }     
                            }, 200)
                        }, 200);
                    }, 200);
}
function FIgnor (){
    const btn = document.querySelector('.pos-3-4')
    btn?.click()
    const btn1 = document.querySelector('.pos-4-4')
    btn1?.click()
                    
}
