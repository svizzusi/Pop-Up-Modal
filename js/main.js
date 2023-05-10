// fetch the buttons in varibles 
let modalButton= document.querySelector('#btn-modal')
let modalContainer = document.querySelector('.modal-container')

let popUpButton = document.querySelector('#btn-pop-up')
let popUpContainer = document.querySelector('.pop-up-container')

let closeButton = document.querySelector('.close')
let closePopUpButton = document.querySelector('.closePopUp')

// on click of the model button, show model
modalButton.addEventListener('click', function() {
    modalContainer.style.display = "flex";
});

// on click of the close button, hide model

closeButton.addEventListener('click', function() {
    modalContainer.style.display = "none";
});

// on click of the pop up button, show pop up
popUpButton.addEventListener('click', function() {
    popUpContainer.style.display = "flex";
});

// on click of the close button, hide pop up

closePopUpButton.addEventListener('click', function() {
    popUpContainer.style.display = "none";
});

// on click of the background it will closes the pop up or modal
modalContainer.addEventListener('click', function() {
    modalContainer.style.display = "none";
});

popUpContainer.addEventListener('click', function() {
    popUpContainer.style.display = "none";
});