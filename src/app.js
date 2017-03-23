'use strict';

// --- Vendors ---
import 'jquery/dist/jquery.min.js';

// --- Custom styles ---
import './scss/main.scss';


/* ----- Sections navigation ----- */
/* --------------------------------- */

// navButton.on('click', e => {
//     const $this = $(e.target);
    
//     /* remove previous classes */
//     navButton.removeClass('inactive_reverse active_reverse');
//     overlay.removeClass('active active_reverse');
    
//     $this.addClass('active');
//     $this.siblings().addClass('inactive');
//     $('#' + $this.data('id')).addClass('active');
    
//     /* Prevent scrolling */
//     $('body').addClass('noscroll');
// });

// $('.close').on('click', e => {
//      Remove old classes and add new ones on menu elements 
//     $('.active').removeClass('active').addClass('active_reverse');
//     $('.inactive').addClass('inactive_reverse');
    
//     /* Bring back overlay to its default state */
//     $(e.target).parent().addClass('active_reverse');

//     /* Remove .noscroll and .inactive when reverse animation is finished */
//     $('.inactive_reverse').bind(animEnd, function(){
//         $('body').removeClass('noscroll');
//         $(navButton).removeClass('inactive');
//         $('.inactive_reverse').unbind(animEnd);
//     });
// });

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