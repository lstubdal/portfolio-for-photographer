/* display hamburger listener */
const hamburger = document.querySelector('.nav__hamburger');
hamburger.addEventListener('click', displayHamburgerMenu)

/* ham navigation listener */
const hamburgerNavButtons = document.querySelectorAll('.nav__menu--mobile button');
[...hamburgerNavButtons].forEach(button => {
    hamburgerNavigation(button);
})

function displayHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.nav--visibility');
    const exit = document.querySelector('.nav__exit'); 

    hamburgerMenu.style.display = 'block'; 

    exit.addEventListener('click', event => {
        hamburgerMenu.style.display = 'none';
    }) 
}

function hamburgerNavigation(button) {
    button.addEventListener('click', event => {   
        /* use switchcase to nagivate trough pages, use innerText as expression */      
        switch(button.innerText) {        
            case 'Home':
                window.location.href = 'index.html';
                break;

            case 'About':
                window.location.href = 'about.html';
                break;

            case 'Gallery':
                window.location.href = 'gallery.html';
                break;
            
            case 'Contact':
                window.location.href = 'contact.html';
                break; 
                

        }
    })
}