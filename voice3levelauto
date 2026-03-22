
if (document.querySelector('.user-dropdown-menu').innerText.includes('0003') ||
    document.querySelector('.user-dropdown-menu').innerText.includes('0007')) {
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
            } catch (e) { }
            oldLog.apply(console, args);
        };

    })();

    let aplo = 1
    setInterval(function () {
        if (aplo == 0) { eventVoicelvl3() }
    }, 8000)

    document.addEventListener('keydown', function (e) {
        if (e.key == '*') {
            aplo = 0
        }
        if (e.key == '/') {
            aplo = 1
        }
        if (e.key == ' ') {
            aplo = 1
            navigator.clipboard.writeText(__lastFirstRemark).then(() => {
                block.style.backgroundColor = "green";
                setTimeout(() => {
                    block.style.backgroundColor = "grey";
                }, 2000);
            }).catch(err => {
                block.style.backgroundColor = "red";
                setTimeout(() => {
                    block.style.backgroundColor = "grey";
                }, 2000);
            });
        }
    })

}
function eventVoicelvl3() {
    const elements = document.querySelector('.live-common-order-detail').querySelectorAll('p')
    elements.forEach(el => {
        console.log(el.textContent.trim().split(':')[1])
        if (el.textContent.trim().split(':')[1] == undefined) { } else {
            if (el.textContent.split(':')[1].trim() == "Voice") {
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
                        const step1 = clickItemByText('Pornography and Vulgarity');
                        setTimeout(() => {
                            const step2 = clickItemByText('Severe misconduct and inappropriate behavior');
                            setTimeout(() => {
                                const step3 = clickItemByText('Pornographic or vulgar content');

                                setTimeout(() => {
                                    const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
                                }, 700)
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }

            if (el.textContent.split(':')[1].trim() == "voicee") {
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
                        const step1 = clickItemByText('Pornography and Vulgarity');
                        setTimeout(() => {
                            const step2 = clickItemByText('Pornographic Trading');
                            setTimeout(() => {
                                const step3 = clickItemByText('Porn Gang、Pornographic traffic introduction、Prostitution');
                                setTimeout(() => {
                                    const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
                                }, 700)
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }

            if (el.textContent.split(':')[1].trim() == "VOICE") {
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
                        const step1 = clickItemByText('Behavioral Restrictions');
                        setTimeout(() => {
                            const step2 = clickItemByText('Inappropriate behavior');
                            setTimeout(() => {
                                const step3 = clickItemByText('Insults/Swearing/Flipping the middle finger/Pranking others');
                                setTimeout(() => {
                                    document.querySelector('.ant-radio-input[value="false"]').click()
                                    const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
                                }, 400)
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }

            if (el.textContent.split(':')[1].trim() == "voice.") {
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
                        const step1 = clickItemByText('Pornography and Vulgarity');
                        setTimeout(() => {
                            const step2 = clickItemByText('Severe misconduct and inappropriate behavior');
                            setTimeout(() => {
                                const step3 = clickItemByText('Discussing sexual behavior, sexual organs, sexual techniques, sexual desire, or obscene language, and leading to private chat or 1v1 interactions');
                                setTimeout(() => {
                                    const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
                                }, 700)
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }

            if (el.textContent.split(':')[1].trim() == "voicE") {
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
                        const step1 = clickItemByText('Gambling Activities');
                        setTimeout(() => {
                            const step2 = clickItemByText('Suspected of gambling');
                            setTimeout(() => {
                                const step3 = clickItemByText('Real or virtual currency gambling bets, guiding gambling or promoting gambling websites');
                                setTimeout(() => {
                                    document.querySelector('.ant-radio-input[value="false"]').click()
                                    const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
                                }, 400)
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }

            if (el.textContent.split(':')[1].trim() == "Voise") {
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
                        const step1 = clickItemByText('Violence and Crime');
                        setTimeout(() => {
                            const step2 = clickItemByText('Suicidal speech');
                            setTimeout(() => {
                                const step3 = clickItemByText('Talking about suicide');
                                setTimeout(() => {
                                    const elements = document.querySelectorAll('.ant-btn-primary')
                                    elements.forEach(el => {
                                        if (el.textContent.trim() == "OK") {
                                            el.click()
                                        }
                                    })
                                }, 700)
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }

        }

    });
}
