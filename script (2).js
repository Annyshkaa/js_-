const button = document.querySelector('button');
const heading = document.querySelector('h1'); 

button.addEventListener('click', () => {
    heading.textContent = 'Пока, мир'; 
});
