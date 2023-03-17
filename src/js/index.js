const text = document.querySelector('.text');

const container = document.querySelector('.container');
const navBar = document.querySelector('.nav-bar');
const logo = document.querySelector('.logo');
const search = document.getElementById('search')
const dashboard = document.getElementById('dashboard');
const pet = document.getElementById('pets');
const user = document.getElementById('user');
const vet = document.getElementById('vets');
const settings = document.getElementById('settings');
const profile = document.querySelector('.profile');

const elements = [
    search, dashboard, pet, user, vet, settings, profile, navBar, container, logo
]

dashboard.addEventListener('click', () => {
    text.innerText = 'Dashboard';
})

pet.addEventListener('click', () => {
    text.innerText = 'Pets';
})

user.addEventListener('click', () => {
    text.innerText = 'Clientes';
})

vet.addEventListener('click', () => {
    text.innerText = 'Vets';
})

settings.addEventListener('click', () => {
    text.innerText = 'Ajustes';
})

function clickMenu() {
    elements.forEach((element) => {
        element.classList.toggle('off');
    })
}