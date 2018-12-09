var app = document.getElementById('app');
var router = new Router();
window.addEventListener('hashchange', updatePage)

updatePage();

function updatePage () {
    var routerRespone = router.matchRoute(window.location.hash);
    if (window.location.hash.includes("#peeps")) {
      routerRespone[0].then(res => { app.innerHTML = res });
    } else {
      app.innerHTML = routerRespone[0];
    }
    if (routerRespone.length > 1) {
      if(window.location.hash.includes("#peeps/")){
        return routerRespone[1](parseInt(window.location.hash.split('/')[1]));
      }
      routerRespone[1]();
    }
};

function updateUrl(hash) {
  window.location.hash = hash;
};

function setIndexButtons () {
  document.getElementById('log-in-btn').addEventListener("click", function() {
    updateUrl('login');
  });

  document.getElementById('sign-up-btn').addEventListener("click", function() {
    updateUrl('signup');
  });
};

function setFormButton () {
  var formBtn = document.getElementsByClassName('btn')[0];
  document.getElementsByClassName('btn')[0].disabled = false;
  formBtn.addEventListener("click", function(e) {
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
  showModal(router.displayError(errorMsg), 'errorMsgModal');
};

function addModal(modalHtml) {
  app.innerHTML += modalHtml;
};

function showModal (modalHtml, modalId) {
  addModal(modalHtml);
  $(`#${modalId}`).modal('show');
  closeModal(modalId);
};

function closeModal(modalId) {
  $(`#${modalId}`).on('hidden.bs.modal', function () {
    if (modalId === 'errorMsgModal') { 
      var hash = getUrlHash();
      updateUrl('')
      updateUrl(hash);
    } else {
      history.go(-1)
    }
  });
};

function getUrlHash () {
  return window.location.hash.split('#')[1]
};

// function createNewUser(handle, password) {
//   mainController.createNewUser(handle, password)
//     .then(function(response){
//       response === true ? displayPeepsList() : displayError(`The handle ${handle} is already in use`);
//     });
// };

function logInUser(handle, password) {
  router.login(handle, password);
};

function displayPeepsList() {
  updateUrl('peeps');
};

function showSinglePeep(peepId) {
  router.getSinglePeep(peepId)
    .then(singlePeepHtml => {
      showModal(singlePeepHtml, 'peep-modal');
    });
};