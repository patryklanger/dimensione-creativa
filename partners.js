const partnersArray = document.querySelectorAll('.partners--box');
const partnersDotsElement = document.querySelector('.partners--dots');
var partnersDots;

insertDots();
showFirstPartner();

partnersDotsElement.addEventListener('click', (e) => {
  const clientNo = e.target.classList[0].replace('partner', '');
  if (
    e.target.classList.contains('checked') ||
    !e.target.classList.contains('partners--dot')
  )
    return;
  partnersArray.forEach((el) => {
    el.classList.remove('show');
  });
  partnersDots.forEach((el) => {
    el.classList.remove('checked');
  });
  e.target.classList.add('checked');
  partnersArray[clientNo - 1].classList.add('show');
});

function insertDots() {
  for (var i = 0; i < partnersArray.length; i++) {
    var newDiv = document.createElement('div');
    partnersDotsElement.appendChild(newDiv);
    newDiv.className = i + 1 + 'partner partners--dot';
    if (i == 0) {
      newDiv.classList.add('checked');
    }
  }
}
function showFirstPartner() {
  partnersDots = document.querySelectorAll('.partners--dot');
  console.log(clientsDots);
  partnersArray[0].classList.add('show');
}
