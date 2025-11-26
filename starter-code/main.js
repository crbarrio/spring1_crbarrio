"use strict"

function showTab(event, tabName) {
    let tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    let tab_btn = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tab_btn.length; i++) {
       tab_btn[i].className = tab_btn[i].className.replace("active-tab", "")
    }

    document.getElementById(tabName).style.display = 'flex';
    event.currentTarget.className += ' active-tab'

}

const collapsibleElements = document.getElementsByClassName('collapse-btn')

for (let i = 0; i < collapsibleElements.length; i++) {
    collapsibleElements[i].addEventListener('click', function () {
        
        this.getElementsByTagName('svg')[0].classList.toggle('active-collapsible');

        let content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}



const formContact = document.getElementById('formContact');

formContact.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = this.querySelector('input[type="text"]');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';
    emailInput.classList.remove('input-error');

    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        emailInput.classList.add('input-error');
    }
});

const mobileMenuElements = document.getElementsByClassName('mobile-menu')

for (let i = 0; i < mobileMenuElements.length; i++) {
    mobileMenuElements[i].addEventListener('click', function () {
        
        document.getElementById('navbar').classList.toggle('mobile');
    })
}




