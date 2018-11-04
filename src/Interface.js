var app = document.getElementById('app');
var mainController = new MainController();
var peepController;


startApp();

function startApp () {
  mainController = new MainController();
  app.innerHTML = mainController.renderIndex();
  setButtons();
};

function setButtons () {
  document.getElementById('sign-up-btn').addEventListener("click", function() {
    app.innerHTML = mainController.renderSignUp();
    setSubmitButton();
  });
};

function setSubmitButton () {
  document.getElementById('confirm-sign-up-btn').addEventListener("click", function(e) {
    e.preventDefault();
    verifyFormData();
  });
};

function verifyFormData() {
  var handle = document.getElementById('handle').value.toString();
  var password = document.getElementById('password').value.toString();
  var confirmPassword = document.getElementById('confirm-password').value.toString();
  var letters = /^[A-Za-z]+$/;

  if (handle === "" || password === ""  || confirmPassword === "") {
    alert('Please complete all fields')
  } else if (!handle[0].match(letters)) {
    alert('Handle must begin with a letter');
  } else if (handle.includes(" ")) {
    alert('Your handle cannot contain spaces');
  } else if (password.includes(" ")) { 
    alert('Your password cannot contain spaces');
  } else if (password !== confirmPassword) {
    alert('Passwords must be the same');
  } else {
    alert('Success!');
  }


  // var userData = {  "user": {
  //                     "handle": handle.toString(),
  //                     "password": password.toString()
  //                   }
  //                 }

  // console.log(userData);
  // displayPeepsList();
};

function displayPeepsList() {
  peepController = new PeepsController();
  peepController.renderPeepsList()
  .then(response => {
    app.innerHTML = response
  });
}

// var peepController = new PeepController();

// showPeepOnChangeUrl();

// function showPeepOnChangeUrl() {
//   window.addEventListener('hashchange', showClickedPeep);
// };

// function showClickedPeep() {
//   showSinglePeep(getPeepFromUrl(window.location));
// };

// function getPeepFromUrl(location) {
//   return location.hash.split("#peeps/")[1];
// };

// function showSinglePeep(peepId) {
//   var peepModal = document.getElementById('peepModal');
//   peepController.renderSinglePeep(parseInt(peepId), peepModal);
// };
