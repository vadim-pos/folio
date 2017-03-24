'use strict';

// --- Vendors ---
import 'jquery/dist/jquery.min.js';

// --- Custom styles ---
import './scss/main.scss';


/* ----- Sections navigation ----- */
/* --------------------------------- */

const btns  = $('.nav__btn');
const sectionClosers = $('.section-closer');

btns.on('click', function() {
    const $this = $(this);
    
    // remove previous classes
    btns.removeClass('active-reverse inactive-reverse');
    $('.overlay').removeClass('active-reverse');


    // Activate buttons and icons
    $this.addClass('active');
    $this.siblings().addClass('inactive');
    
    // Show target overlay
    $('.' + $this.data('section')).addClass('active');

    // Remove main scroll
    $(document.body).addClass('noscroll');
});

sectionClosers.on('click', function() {
    
    // unactivate current section
    $(this).parent().removeClass('active').addClass('active-reverse');
    
    // unactiveate navigation buttons
    $('.nav__btn.active').removeClass('active').addClass('active-reverse');
    $('.nav__btn.inactive').removeClass('inactive').addClass('inactive-reverse');

    // Bring back main scroll
    $(document.body).removeClass('noscroll');
});

/* ----- Contacts toggling ----- */
/* ------------------------------- */
const contactsList = $('.contact__list');
const contactToggleLinks = contactsList.find('.contact__toggle');
const contactsClosers = contactsList.find('.contact__closer');
const contactsItems = contactsList.find('.contact__item');
const contactsIntroItem = contactsList.find('.contact__item--intro');

contactToggleLinks.on('click', function() {
    contactsItems.removeClass('active');

    contactsIntroItem.addClass('active');
    $(this).parent().addClass('active');
});

contactsClosers.on('click', function() {
    contactsIntroItem.removeClass('active');
    $(this).parent().removeClass('active');
});
