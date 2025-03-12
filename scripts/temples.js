

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});