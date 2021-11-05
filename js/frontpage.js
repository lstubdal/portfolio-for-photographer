
function displayHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.frontpage__nav--visibility');
    const exit = document.querySelector('.frontpage__exit'); /* endre snake case */

    hamburgerMenu.style.display = 'block'; 

    exit.addEventListener('click', event => {
        hamburgerMenu.style.display = 'none';
    }) 
}


/********** event listeners ***************/

/* hamburger button */
const hamburger = document.querySelector('.frontpage__nav--mobile');
hamburger.addEventListener('click', displayHamburgerMenu);

/* ham navigation */
const hamburgerNavButtons = document.querySelectorAll('.frontpage__menu');
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


