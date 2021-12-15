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

let itemContent2 = '';

for (let i = 0; i < items.length; i++) {
    itemContent2 += `
        <div class="opaco ciao" id="vertical-${i}">
            <img src="${items[i]}">
        </div>`;
}


const verticalImg = document.querySelector('.vertical-img');
verticalImg.innerHTML = itemContent2;

let verticalActive = document.getElementById('vertical-'+elementActive);
verticalActive.classList.remove('opaco');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function(){
    if (elementActive == 0)  {
        elementActive = items.length-1;
    }else{
        elementActive--;
    }
    itemActive.classList.remove('active');
    verticalActive.classList.add('opaco');
    itemActive = document.getElementById('item-'+elementActive);
    verticalActive = document.getElementById('vertical-'+elementActive);
    itemActive.classList.add('active');
    verticalActive.classList.remove('opaco');
    
});

next.addEventListener('click', function(){
    if (elementActive == items.length-1) {
        elementActive = 0;
    }else{
        elementActive++;
    }

    itemActive.classList.remove('active');
    verticalActive.classList.add('opaco');
    itemActive = document.getElementById('item-'+elementActive);
    verticalActive = document.getElementById('vertical-'+elementActive);
    itemActive.classList.add('active');
    verticalActive.classList.remove('opaco');
});

