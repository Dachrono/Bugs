// eslint-disable-next-line no-unused-vars
function hamFuntion() {
  if (document.getElementById('navBar').style.display === 'none') {
    document.getElementById('navBar').style.display = 'block';
    document.getElementById('menu').style.position = 'fixed';
    document.getElementById('barClose').src = 'Pics/Icons/xicon.png';
  } else {
    document.getElementById('navBar').style.display = 'none';
    document.getElementById('barClose').src = 'Pics/Icons/nav-icon.png';
  }
}

// eslint-disable-next-line no-unused-vars
function cerrar() {
  document.getElementById('navBar').style.display = 'none';
  document.getElementById('barClose').src = 'Pics/Icons/nav-icon.png';
}

const cardsInfo = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: '#',
    source: '#',
  },
];

const cards = document.querySelector('.Cards');

function wCard(index) {
  const element = document.createElement('section');
  element.classList.remove(`WorksCard${index}`);
  element.classList.add(`WorksCard${index + 1}`);
  element.innerHTML = `
    <div class="card1">
    </div>
    <div class="card2">
      <h1>${cardsInfo[index].name}</h1>
    </div>
    <ul class="card3">
      <li>${cardsInfo[index].technologie[0]}</li>
      <li>${cardsInfo[index].technologie[1]}</li>
      <li>${cardsInfo[index].technologie[2]}</li>
      <li>${cardsInfo[index].technologie[3]}</li>
    </ul>
    <div class="card4">
      <button class="CardBut">See project</button>
    </div>`;
  return element;
}

function popCard(index) {
  const newSec = document.createElement('section');
  newSec.classList.add('pop');
  document.querySelector('body').appendChild(newSec);
  const popup = document.querySelector('.pop');
  popup.innerHTML = `
    <div class="popFlex">
      <div class="closeButton">
        <button class="popClose"><img srcset="Pics/Icons/xiconW.png 767w, Pics/Icons/xicon.png 1124w" alt="Icon"></button>
      </div>
      
      <img class="projIma" srcset="Pics/imgPop.png 767w, Pics/imgPop2.png 1124w" alt="Photo">

      <div class="items">

        <h2 class="item1">Keeping track of hundreds of components</h2>

        <ul class="item2">
          <li>${cardsInfo[2].technologies[0]}</li>
          <li>${cardsInfo[2].technologies[1]}</li>
          <li>${cardsInfo[2].technologies[2]}</li>
          <li>${cardsInfo[2].technologies[3]}</li>
        </ul>

        <p class="item3">${cardsinfo[index].description}
        </p>

        <div class="popButton item4">
          <button>See source<img src="Pics/Icons/IconExp.png" alt="icon"></button>
          <button>See live<img src="Pics/Icons/IconGit.png" alt="icon"></button>
        </div>

      </div>  
    </div>
  `;
  return newSec;
}

function closePop(newSec) {
  const btnC = newSec.querySelector('.popClose');
  btnC.addEventListener('click', () => {
    newSec.remove();
  });
}

for (let i ; i < cardsInfo.length; i = 1) {
  const card = wCard(i);
  cards.appendChild(card);
  const butSelect = card.querySelector('.CardBut');
  butSelect.addEventListener('click', () => {
    const pop = popCard(i);
    closePop(pop);
  });
}