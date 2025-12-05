"use strict"

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('nav-bar');
const logoBookmark = document.getElementById('logo-bookmark');

openMenu.addEventListener('click', function () {
    navLinks.classList.remove('hidden');
    navLinks.classList.add('flex');

    openMenu.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    navbar.classList.add('bg-slate-800/95', 'fixed');
    logoBookmark.classList.add('fill-white');

});

closeMenu.addEventListener('click', function () {
    navLinks.classList.add('hidden');
    navLinks.classList.remove('flex');

    closeMenu.classList.add('hidden');
    openMenu.classList.remove('hidden');
    navbar.classList.remove('bg-slate-800/95', 'fixed');
    logoBookmark.classList.remove('fill-white');

});





class TabsAutomatic {
  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [];

    this.firstTab = null;
    this.lastTab = null;

    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
    this.tabpanels = [];

    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab, false);
  }

  setSelectedTab(currentTab, setFocus) {
    if (typeof setFocus !== 'boolean') {
      setFocus = true;
    }
    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        tab.classList.remove('sm:border-transparent');
        tab.classList.add('border-b-3', 'border-active', 'text-gray-900');
        this.tabpanels[i].classList.add('flex');
        this.tabpanels[i].classList.remove('hidden');


        if (setFocus) {
          tab.focus();
        }
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        tab.classList.remove('border-b-3', 'border-active', 'text-gray-900');
        tab.classList.add('sm:border-transparent');
        this.tabpanels[i].classList.add('hidden');
        this.tabpanels[i].classList.remove('flex');
      }
    }
  }

  setSelectedToPreviousTab(currentTab) {
    var index;

    if (currentTab === this.firstTab) {
      this.setSelectedTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.setSelectedTab(this.tabs[index - 1]);
    }
  }

  setSelectedToNextTab(currentTab) {
    var index;

    if (currentTab === this.lastTab) {
      this.setSelectedTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.setSelectedTab(this.tabs[index + 1]);
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case 'ArrowLeft':
        this.setSelectedToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.setSelectedToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.setSelectedTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.setSelectedTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

// Initialize tablist

window.addEventListener('load', function () {
  var tablists = document.querySelectorAll('[role=tablist]');
  for (var i = 0; i < tablists.length; i++) {
    new TabsAutomatic(tablists[i]);
  }
});


const collapsibleElements = document.getElementsByClassName('collapse-header')

for (let i = 0; i < collapsibleElements.length; i++) {
    collapsibleElements[i].addEventListener('click', function () {

        this.getElementsByTagName('svg')[0].getElementsByTagName('path')[0].classList.toggle('stroke-active');
        this.getElementsByTagName('svg')[0].classList.toggle('rotate-180');

        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);

        let content = this.nextElementSibling;

        if (content.classList.contains('max-h-0')) {
            content.classList.remove('max-h-0', 'hidden');
            content.classList.add('max-h-screen');
        } else {
            content.classList.add('max-h-0', 'hidden');
            content.classList.remove('max-h-screen');
        }
    })
}



const formContact = document.getElementById('formContact');

formContact.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = this.querySelector('input[type="text"]');
    const inputDiv = document.getElementById('input-div');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.classList.add('hidden');
    inputDiv.classList.remove('bg-active');
    emailInput.classList.remove("error-input");
    emailInput.classList.add('border-gray-500');

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errorMessage.classList.remove('hidden');
      emailInput.classList.remove('border-gray-500');
      inputDiv.classList.add('bg-active');
      emailInput.classList.add("error-input");
    }
});

const mobileMenuElements = document.getElementsByClassName('mobile-menu')

for (let i = 0; i < mobileMenuElements.length; i++) {
    mobileMenuElements[i].addEventListener('click', function () {
        
        document.getElementById('navbar').classList.toggle('mobile');
    })
}

