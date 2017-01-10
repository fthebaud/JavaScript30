'use strict';

const addItems = document.querySelector('.add-items'); //form
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

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
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function populateList(plates = [], domList) {
  domList.innerHTML  = plates.map((plate, index) => {
    return `
      <li>
        <input type="checkbox" id="item${index}" data-index=${index} ${plate.done ? 'checked' : ''}/>
        <label for="item${index}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(event) {
  if (!event.target.matches('input')) return; //eslint-disable-line curly
  const el = event.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  // populateList(items, itemsList);
}


// we listen to 'submit', this event will be sent when there is a click on the submit button or enter
addItems.addEventListener('submit', addItem);

// event delegation : we listen on the list, not on its children
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
