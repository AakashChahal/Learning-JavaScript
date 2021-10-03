'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* implementation of smooth scrolling */

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // scrolling normal
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // scrolling smooth
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // modern way (only works in modern browser)
  section1.scrollIntoView({ behavior: 'smooth' });
});

/* Page navigation */
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// event delegation: page navigation
// 1. add event listener to the common parent element
// 2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/* select, create and delete Elements */

// Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improve functionality and analytics';
message.innerHTML =
  'We use cookies to improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (e) {
    message.remove();
  });

/* styles, attributes and classes */

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '98.74vw';

console.log(message.style.height); // we won't see anything as we didn't declare height using the style methid
console.log(message.style.width);

console.log(getComputedStyle(message)); // we can use getComputedStyle() to get all the CSS applied to a element on the web page.
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // this works because it is an image, and alt & src are supposed to be the attributes of image tag, but this won't work with other attributes
console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute('src')); // used to read attributes which are not traditionaly part of that tag

logo.setAttribute('designer', 'Aakash');
console.log(logo.getAttribute('designer'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('one', 'two');
logo.classList.remove('one', 'two');
logo.classList.toggle('one');
logo.classList.contains('one');

/* Types of events and event handlers */
// const h1 = document.querySelector('h1');

// // old way of listening to events
// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Heading!');
// // };

// const alertH1 = function (e) {
//   alert('addEventListener: Heading!');

//   // removing event listener
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

/* Event propogation */
// const randInt = (min = 0, max = 1) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randColor = () =>
//   `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randColor();
//   console.log('LINK: ', e.target);

//   // stopping event propogation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randColor();
//   console.log('CONTAINER: ', e.target);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randColor();
//   console.log('NAV: ', e.target);
// });

/* DOM traversing */
const h1 = document.querySelector('h1');

// going down: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = '#ffffff';
h1.lastElementChild.style.color = 'orangered';

// going up: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
