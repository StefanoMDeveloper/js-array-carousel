const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let itemContent = '';
let elementActive = 0;

for (let i = 0; i < items.length; i++) {
    itemContent += `
    <div class="item" id="item-${i}">
        <img src="${items[i]}">
        <div class="item-text">
            <p class="title">${title[i]}</p>
            <p>${text[i]}</p>
        </div>
        
    </div>`;
}

const itemContainer = document.querySelector('.item-container');
itemContainer.innerHTML = itemContent;

let itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function(){
    elementActive--;
    if (elementActive == -1) {
        elementActive = items.length;
    }
    itemActive.classList.remove('active');
    itemActive = document.getElementById('item-'+elementActive);
    itemActive.classList.add('active');
    
});

next.addEventListener('click', function(){
    elementActive++;
    if (elementActive == items.length+1) {
        elementActive = 0;
    }
    itemActive.classList.remove('active');
    itemActive = document.getElementById('item-'+elementActive);
    itemActive.classList.add('active');
});