var app = document.getElementById('app');
var router = new Router();
var currentHash = window.location.hash;
var pageContent;
window.addEventListener('hashchange', function() {
  currentHash = window.location.hash;
  getPageContent();
  if (pageContent) updatePage();
});

getPageContent();
updatePage();

function updatePage () {
  if (currentHash.includes("#peeps")) {
    return pageContent[0]
    .then(peepListHtml => app.innerHTML = peepListHtml )
    .then(res => {
      if(hashIsPeepId()) return pageContent[1].then(singlePeepHtml => callCallback(pageContent[2], singlePeepHtml));
      callCallback(pageContent[1], pageContent[2]);
      if(currentHash === "#peeps/new") return callCallback(pageContent[3]);
    })
  } else {
    app.innerHTML = pageContent[0];
    callCallback(pageContent[1])
  }  
};

function getPageContent () {
  pageContent = router.matchRoute(currentHash);
};

function hashIsPeepId () {
  return Number.isInteger(parseInt(currentHash.split('/')[1]));
}

function callCallback(callbackFunction, param = null) {
  if (param) return callbackFunction(param);
  callbackFunction();
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

function showModal (modalHtml) {
  addModal(modalHtml);
  $('.modal').modal('show');
  closeModal();
};

function closeModal() {
  $('.modal').on('hidden.bs.modal', function () {
    if (document.getElementById('errorMsgModal')) { 
      var hash = currentHash.split('#')[1];
      updateUrl('')
      updateUrl(hash);
    } else {
      updateUrl('peeps');
    }
  });
};

function logInUser(handle, password) {
  router.login(handle, password);
};

function createNewUser(handle, password) {
  router.createNewUser(handle, password);
};

function displayPeepsList() {
  updateUrl('peeps');
};

function setNavBarButtons(inSession) {
  if (inSession) {
    var navButtons = document.getElementsByClassName('nav-btn');
    navButtons[0].addEventListener("click", function() {
      updateUrl('peeps/new');
    });
    navButtons[1].addEventListener("click", function() {
      router.logout();
    });
  };
};

function setNewPeepButton () {
  var peepButton = document.getElementById("composePeep")
  var peepTextArea = document.getElementById("peepTextArea")
  peepButton.disabled = true;
  peepTextArea.addEventListener("input", function(){
    peepTextArea.value === "" ? peepButton.disabled = true : peepButton.disabled = false
  });

  peepButton.addEventListener("click", function(){
    router.createPeep(peepTextArea.value);
    closeModal();
    $('.modal').modal('hide');
  });
};