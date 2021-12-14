const hamburger = document.querySelector('.nav__hamburger');
hamburger.addEventListener('click', displayHamburgerMenu)

function displayHamburgerMenu() {
    console.log('trykket');
    const hamburgerMenu = document.querySelector('.nav--visibility');
    const exit = document.querySelector('.nav__exit'); 

    hamburgerMenu.style.display = 'block'; 

    exit.addEventListener('click', event => {
        hamburgerMenu.style.display = 'none';
    }) 
}

/* ham navigation */
const hamburgerNavButtons = document.querySelectorAll('.nav__menu--mobile button');
[...hamburgerNavButtons].forEach(button => {
    button.addEventListener('click', event => {         /* legge i funksjon? */
        if (button.innerText === 'Home'){
            window.location.href = 'index.html'
        }

        if (button.innerText === 'About'){
            window.location.href = 'about.html'
        }

        if (button.innerText === 'Gallery') {
            window.location.href = 'gallery.html';
        }

        if (button.innerText === 'Contact'){
            window.location.href = 'contact.html'
        }
    })
})