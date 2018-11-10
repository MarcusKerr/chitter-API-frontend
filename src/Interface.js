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
  document.getElementById('confirm-sign-up-btn').disabled = true;
  return mainController.createNewUser(handle, password)
    .then(function(response){
      if (response.status === 422) {
        return displayError(`The handle ${handle} is already in use`);
      } else if (response.status === 201) {
        return logInUser(handle, password);
      }
    });
};

function logInUser(handle, password) {
  mainController.loginUser(handle, password)
    .then(function(response) {
      if(response.status === 500) {
        displayError(`The details you enetered were incorrect`);
      } else if (response.status === 201) {
        return response.json()
      }
    })
    .then(function(sessionData) {
      startSession(sessionData);
    });
};

function startSession(sessionData) {
  // start session
  displayPeepsList();
};

function displayPeepsList() {
  mainController.renderPeepsList()
  .then(function(response){
    app.innerHTML = response
  });
};

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
