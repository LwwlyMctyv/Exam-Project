const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
	dropdown.classList.toggle('active');
});

const shadow = document.querySelector('.shadow');

dropdown.addEventListener('click', () => {
	shadow.classList.toggle('active');
});