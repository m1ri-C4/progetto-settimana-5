const darkMode = document.querySelector('#dark-mode');
const lightMode = document.querySelector('#light-mode');

// funzioni dei bottoni light e dark mode
darkMode.addEventListener('click', (e) => {
    document.body.classList.add('darkTheme');
    darkMode.style.display = 'none';
    lightMode.style.display = 'inline-block';
});

lightMode.addEventListener('click', (e) => {
    document.body.classList.remove('darkTheme');
    lightMode.style.display = 'none';
    darkMode.style.display = 'inline-block';
});