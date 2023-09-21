(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// function emailSend() {
// Email.send({
//   Host : "smtp.elasticemail.com",
//   Username : "guna.srinivasan06@gmail.com",
//   Password : "DA4D49614F28BD4CAEF3ACD65D1BC3EEDD6B",
//   To : 'gunavasan0106@gmail.com',
//   From : "guna.srinivasan06@gmail.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// );

// }