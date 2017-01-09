'use strict';

const addItems = document.querySelector('.add-items'); //form
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(event) {
  // par defaut lors d'un submit le formulaire recharge la page / envoie des données au serveur
  // on veut empecher ça (we are going to do this client side)
  event.preventDefault();
  const text = this.querySelector('[name="item"]').value;
  const item = {
    text, //ES6 to the rescue
    done: false
  };
  // clear the input : reset the form
  this.reset();
  items.push(item);
}

function populateList() {
  // 7'0''
}

// we listen to 'submit', this event will be sent when there is a click on the submit button or enter
addItems.addEventListener('submit', addItem);
