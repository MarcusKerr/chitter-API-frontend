var app = document.getElementById('app');
var mainController = new MainController();            

startApp();

function startApp () {
  app.innerHTML = mainController.renderIndex();
  setIndexButtons();
};

function setIndexButtons () {
  document.getElementById('sign-up-btn').addEventListener("click", function() {
    app.innerHTML = mainController.renderSignUp();
    setFormButton();
  });

  document.getElementById('log-in-btn').addEventListener("click", function() {
    app.innerHTML = mainController.renderLogIn();
    setFormButton();
  });
};

function setFormButton () {
  var btn = document.getElementsByClassName('btn');
  btn[0].disabled = false;
  btn[0].addEventListener("click", function(e) {
    e.preventDefault();
    verifyFormData();
  });
};

function verifyFormData() {
  document.getElementsByClassName('btn')[0].disabled = true;
  var inputsArray = document.getElementsByTagName('input');
  if (!allFieldsComplete(inputsArray)) {
    displayError('Please complete all fields');
  } else if (!validInput(inputsArray[0])) {
    displayError('Handle must begin with a letter');
  } else if (containsSpaces(inputsArray[0])) {
    displayError('Handle must not contain spaces');
  } else if (containsSpaces(inputsArray[1])) {
    displayError('Password must not contain spaces');
  } else if (inputsArray.length === 3) {
    if (!passwordMatch(inputsArray)) {
      displayError('Passwords must be the same');
    } else {
      createNewUser(inputsArray[0].value.toString(), inputsArray[1].value.toString());
    }
  } else {
    logInUser(inputsArray[0].value.toString(), inputsArray[1].value.toString());
  }
};

function allFieldsComplete(inputsArray) {
  for (var i = 0; i < inputsArray.length; i ++) {
    if (inputsArray[i].value === "") return false;
  }
  return true;
};

function validInput(input) {
  var letters = /^[A-Za-z]+$/;
  if (input.value.toString()[0].match(letters)) return true;
  return false;
};

function containsSpaces(input) {
  if (input.value.toString().includes(" ")) return true;
  return false;
};

function passwordMatch(inputsArray) {
  if (inputsArray[1].value.toString() === inputsArray[2].value.toString()) return true;
  return false;
};

function displayError(errorMsg) {
  var errorMessageModal = document.getElementById('errorMsgModal');
  if(errorMessageModal) {
    errorMessageModal.innerHTML = mainController.renderErrorMessage(errorMsg, true);
  } else {
    app.innerHTML += mainController.renderErrorMessage(errorMsg);
  };
  $('#errorMsgModal').modal('show');
  resetForm();
};

function resetForm() {
  var inputsArray = document.getElementsByTagName('input');
  for (var i = 0; i < inputsArray.length; i++) {
    inputsArray[i].value = "";
  }
  setFormButton();
};

function createNewUser(handle, password) {
  mainController.createNewUser(handle, password)
    .then(function(response){
      response === true ? displayPeepsList() : displayError(`The handle ${handle} is already in use`);
    });
};

function logInUser(handle, password) {
  mainController.logInUser(handle, password)
    .then(function(response){
      response === true ? displayPeepsList() : displayError('The details you enetered were incorrect');
    });
};

function logOut(){
  mainController.endSession();
  startApp();
};

function displayPeepsList() {
  mainController.renderPeepsList()
  .then(function(response){
    app.innerHTML = response
  });
};

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
