// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state




const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById ('update-btn');
const nameDiv = document.getElementById('name');

// const nameElem = document.getElementById('name');

// const container = document.getElementById('name-tag');


nameInput.addEventListener('input', ()=>{

});

updateButton.addEventListener('click', ()=>{
  
    const value = nameInput.value;
    nameDiv.textContent = value;
});
