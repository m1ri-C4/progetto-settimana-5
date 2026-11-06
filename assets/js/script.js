
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

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const overlay = document.querySelector('#overlay');

//funzioni apertura e chiusura modal
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.removeAttribute('hidden');
    //blocca lo scroll
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        e.preventDefault();
        overlay.setAttribute('hidden', '');
        //rimuovi il blocco dello scroll
        document.body.style.overflow = '';
    }
});

const messageThanks = document.querySelector('.thanks');
const form = document.querySelector('#form')
const modal = document.querySelector('.modal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageThanks.style.display = 'block';

    //chiusura automatica dopo il messaggio di ringraziamento
    setTimeout(() => {
        modal.classList.add("closing");

        setTimeout(() => {
            overlay.hidden = true;
            modal.classList.remove("closing");
            document.body.style.overflow = '';
        }, 500);

    }, 2000);
});