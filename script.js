console.log('hi ayman');

const introButton = document.querySelector('.intro__button');
const introInputs = document.querySelectorAll('.intro__input');
const textWarnings = document.querySelectorAll('.text-warning')
introButton.addEventListener('click' , (event) => {
    event.preventDefault()

    introInputs.forEach(introInput => {
        if (introInput.value.length === 0) {
            introInput.style.borderColor = 'red';
            introInput.style.backgroundPosition = '93% 50%'
            introInputs[2].setAttribute('placeholder' , 'email@example/com')
            textWarnings.forEach(textWarning => {
                introInput.value.length === 0 ? textWarning.style.display = 'inline' : textWarning.style.display = '';
            })
        }
        else {
            introInput.style.borderColor = '';
            introInput.style.backgroundPosition = ''
            
        }
        
    })

})