let urlAdress = 'https://rickandmortyapi.com/api/character';
let curentState = {};
let usersData = {}
console.log(usersData)
console.log(curentState)
let userData;



async function getFetchCharacters(url) {
  console.log(`address: ${url}`);
  try {
    const data = await fetch(url).then((resp) => resp.json());
    curentState = data.info;
    console.log(curentState);
    usersData = data.results
    return data.results;
  } catch (err) {
    alert('Sory, some problem with fetch-answer');
    console.log('sorry');
  }
}

 function displayList(data) {
  console.log(data);

let userData = data;
   console.log(userData);
  const todoList = document.getElementById('persons-list-wrapper');
  todoList.innerHTML = `<h1>The Rick and Morty API</h1>`;

  userData.forEach((item) => {
    todoList.innerHTML += `<div data-fullname='${item.name}' class="div"> ${item.id} ${item.name} ${item.status} <button btn-name="delete">delete</button> </div>`;
    let elem = document.querySelectorAll('.div');
    let selected = document.getElementById('selected');
    elem.forEach((item) => {
      item.addEventListener('click', () => {
        selected.innerHTML = `${item.dataset.fullname}`;
      });
    });
  });
  let elem = document.getElementsByClassName('div');
  for (let div of elem) {
    div.addEventListener('mouseenter', function () {
      div.classList.add('background-onmouseenter');
    });
    div.addEventListener('mouseleave', function () {
      div.classList.remove('background-onmouseenter');
    });
  } 
}
/* displayList(); */
getFetchCharacters('https://rickandmortyapi.com/api/character');

async function handlePrev() {
  if (!curentState.prev) {
    return;
  }
  displayList(await getFetchCharacters(curentState.prev));
}
async function nextPage() {
  if (!curentState.next) {
    return;
  }
  displayList(await getFetchCharacters(curentState.next));
  console.log(curentState.next);
}

/* let currentState = {};
 
 async function fetchCharData(address) {
   console.log(`address: ${address}`);
   try {
     const data = await fetch(address).then((resp) => resp.json());
     currentState = data.info;
     return data.results;
   } catch (err) {
     console.log('Error happens');
   }
 }
 
 function renderData(data) {
   console.log(data);
 }
 
 fetchCharData('https://rickandmortyapi.com/api/character');
 async function handlePrev() {
   if (!currentState.prev) {
     return;
   }
 
   renderData(await fetchCharData(currentState.prev));
 }
 
 async function handleNext() {
   if (!currentState.next) {
     return;
   }
 
   renderData(await fetchCharData(currentState.next));
 } */
