const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

const btn = document.querySelector('.mainBtn'); 
    btn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });