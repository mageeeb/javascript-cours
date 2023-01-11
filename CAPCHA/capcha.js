
function captchaCF2M(captchaLen) {
            function randomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }

            function getElementsFromArray(array, numberOfElements) {
                let arrayOfElements = [];
                for (let i = 0; i < numberOfElements; i++) {
                    let randomElement = array[randomInt(0, array.length - 1)];
                    arrayOfElements.push(randomElement);
                }
                return arrayOfElements
            }

            function generateCaptcha() {
                captcha.innerHTML = "";

                let captchaArray = getElementsFromArray(allCharacters, captchaLen);
                for (let i = 0; i < captchaArray.length; i++) {
                    captcha.insertAdjacentHTML('beforeend', `<span>${captchaArray[i]}</span>`);
                }
            }

            function validateCaptcha() {
                if (captcha.textContent === captchaInput.value) {
                    console.log("Heeyyy");
                    // Action à effectuer
                } else {
                    generateCaptcha(captchaLen);
                }
            }

            const allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const captcha = document.querySelector('#captcha');
            const captchaInput = document.querySelector('#captchaInput');
            const captchaValidate = document.querySelector('#captchaValidate');
            const captchaRefresh = document.querySelector('#captchaRefresh');

            generateCaptcha(captchaLen);
            captchaValidate.addEventListener('click', validateCaptcha);
            captchaRefresh.addEventListener('click', generateCaptcha);
        }

        captchaCF2M(6)