const contactForm = document.querySelector('.contact--form--actual');
const radioForm = document.querySelectorAll('.help--category');
contactForm.addEventListener('submit', (e) => {
  const modal = document.querySelector('.thank--you--modal--center-mobile');
  let formRadio = '';
  for (var i = 0, length = radioForm.length; i < length; i++) {
    if (radioForm[i].checked) {
      // do whatever you want with the checked radio
      formRadio = radioForm[i].value;
      // only one radio can be logically checked, don't check the rest
    }
  }
  e.preventDefault();
  const body = {
    company: document.querySelector('.contact--form--company--input--mobile')
      .value,
    name: document.querySelector('.contact--form--name--input--mobile').value,
    phone: document.querySelector('.contact--form--phone--input--mobile').value,
    mail: document.querySelector('.contact--form--mail--input--mobile').value,
    helpCategory: formRadio,
    message: document.getElementById('contact--form--message').value,
  };
  console.log(body);
  const mailBody = {
    type: body.helpCategory,
    name: body.name,
    company: body.company,
    phoneNumber: body.phone,
    eMail: body.mail,
    message: body.message,
  };
  const send_button = document.querySelector('.button_send-message');

  setTimeout(() => {
    document.querySelector('.contact--form--company--input--mobile').value = '';
    document.querySelector('.contact--form--name--input--mobile').value = '';
    document.querySelector('.contact--form--phone--input--mobile').value = '';
    document.querySelector('.contact--form--mail--input--mobile').value = '';
    document.getElementById('contact--form--message').value = '';
    // modal.classList.add('thank--you--modal_active--mobile');
    for (var i = 0, length = radioForm.length; i < length; i++) {
      if (radioForm[i].checked) {
        // do whatever you want with the checked radio
        radioForm[i].checked = false;
        // only one radio can be logically checked, don't check the rest
      }
    }
  }, 1000);
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://formsubmit.co/ajax/biuro@jazwiec.art');
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify(mailBody));
});
