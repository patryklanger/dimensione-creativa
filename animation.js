const photoMove = document.querySelector(
  '.page--primary--software_development'
);
const photoPosition = document.querySelector('.software--development--image');
const photoAnim = document.querySelector('.sd--img');
console.log(photoAnim);
let vHeight = window.innerHeight;
let vWidth = window.innerWidth;
let position = photoPosition.getBoundingClientRect();
let pagePosition = document
  .querySelector('.page--primary--software_development')
  .getBoundingClientRect();

let centerPosition = {
  x: position.top - pagePosition.top + (position.bottom - position.top) / 2,
  y: position.left + (position.right - position.left) / 2,
};

window.addEventListener('resize', () => {
  viewHeight = window.innerHeight;
  viewWidth = window.innerWidth;
  position = photoPosition.getBoundingClientRect();
  pagePosition = document
    .querySelector('.sd--container--main')
    .getBoundingClientRect();
  centerPosition = {
    x: position.top - pagePosition.top + (position.bottom - position.top) / 2,
    y: position.left + (position.right - position.left) / 2,
  };
});

photoMove.addEventListener('mousemove', (e) => {
  let y = ((e.pageY - centerPosition.x) / innerHeight) * 60;
  let x = ((e.pageX - centerPosition.y) / innerWidth) * 60;
  photoAnim.style.transform = `translate(${x}px, ${y}px)`;
});
