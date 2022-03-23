const clientsArray = document.querySelectorAll('.clients--box');
const clientsDotsElement = document.querySelector('.clients--dots');
const opinionsSection = document.getElementById('opinions');
var clientsDots;

insertDots();
showFirstClient();

clientsDotsElement.addEventListener('click', (e) => {
  const clientNo = e.target.classList[0].replace('client', '');
  if (
    e.target.classList.contains('checked') ||
    !e.target.classList.contains('clients--dot')
  )
    return;
  clientsArray.forEach((el) => {
    el.classList.remove('show');
  });
  clientsDots.forEach((el) => {
    el.classList.remove('checked');
  });
  e.target.classList.add('checked');
  clientsArray[clientNo - 1].classList.add('show');
  opinionsSection.scrollIntoView({ behavior: 'smooth' });
  countHeights();
});

function insertDots() {
  for (var i = 0; i < clientsArray.length; i++) {
    var newDiv = document.createElement('div');
    clientsDotsElement.appendChild(newDiv);
    newDiv.className = i + 1 + 'client clients--dot';
    if (i == 0) {
      newDiv.classList.add('checked');
    }
  }
}
function showFirstClient() {
  clientsDots = document.querySelectorAll('.clients--dot');
  clientsArray[0].classList.add('show');

  countHeights();
}
