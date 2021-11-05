const gallery =  {
    quotes: [
        {text: 'The photographer that loves architecture and architechtural patterns'},
        {text: 'See the world through patterns'},
    ],
    images: [
        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: './assets/img/gallery/skyscraper.jpg', mobile: './assets/img/gallery/mobile/skyscraper.jpg', tablet: './assets/img/gallery/tablet/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: './assets/img/gallery/copper-wall.jpg', mobile: './assets/img/gallery/mobile/copper-wall.jpg', tablet: './assets/img/gallery/tablet/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: './assets/img/gallery/white-building.jpg', mobile: './assets/img/gallery/mobile/white-building.jpg', tablet: './assets/img/gallery/tablet/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: './assets/img/gallery/wooden-wall.jpg', mobile: './assets/img/gallery/mobile/wooden-wall.jpg', tablet: './assets/img/gallery/tablet/wooden-wall.jpg'},

        {title: 'quote1', year: 0, location: '', file: ''},    

        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: 'assets/img/gallery/skyscraper.jpg', mobile: 'assets/img/gallery/mobile/skyscraper.jpg', tablet: 'assets/img/gallery/tablet/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: 'assets/img/gallery/copper-wall.jpg', mobile: 'assets/img/gallery/mobile/copper-wall.jpg', tablet: 'assets/img/gallery/tablet/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: 'assets/img/gallery/white-building.jpg', mobile: 'assets/img/gallery/mobile/white-building.jpg', tablet: 'assets/img/gallery/tablet/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: 'assets/img/gallery/wooden-wall.jpg', mobile: 'assets/img/gallery/mobile/wooden-wall.jpg', tablet: 'assets/img/gallery/tablet/wooden-wall.jpg'},
        {title: 'quote2', year: 0, location: '', file: ''},

        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: 'assets/img/gallery/skyscraper.jpg', mobile: 'assets/img/gallery/mobile/skyscraper.jpg', tablet: 'assets/img/gallery/tablet/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: 'assets/img/gallery/copper-wall.jpg', mobile: 'assets/img/gallery/mobile/copper-wall.jpg', tablet: 'assets/img/gallery/tablet/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: 'assets/img/gallery/white-building.jpg', mobile: 'assets/img/gallery/mobile/white-building.jpg', tablet: 'assets/img/gallery/tablet/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: 'assets/img/gallery/wooden-wall.jpg', mobile: 'assets/img/gallery/mobile/wooden-wall.jpg', tablet: 'assets/img/gallery/tablet/wooden-wall.jpg'},
    ]
}

function setUpGallery() {
    const galleryContainer = document.querySelector('.gallery__container');

    for (let index = 0; index < gallery.images.length; index++) {
        
        const imageContainer = document.createElement('div');

        if (index === 0 || index === 3 || index === 5 || index === 8 || index === 10 || index === 13) {
            imageContainer.className = 'gallery__image--small';
        } else {
            imageContainer.className = 'gallery__image--big';
        }

        if (index === 4) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'gallery__quote--left';

            const quote = document.createElement('div');
            quote.innerText = gallery.quotes[0].text;

            quoteContainer.appendChild(quote);
            galleryContainer.appendChild(quoteContainer);

        } else if (index === 9) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'gallery__quote--right';

            const quote = document.createElement('div');
            quote.innerText = gallery.quotes[1].text;

            quoteContainer.appendChild(quote);
            galleryContainer.appendChild(quoteContainer);
            
        } else { 
            
            console.log('Window width' + window.innerWidth); 
            const imageElement = document.createElement('img');
            imageElement.srcset = `${gallery.images[index].mobile} 520w,
                                    ${gallery.images[index].tablet} 1000w,
                                    ${gallery.images[index].file} 1200w`;
            imageElement.sizes = `  (max-width: 600px) 520px, 
                                    (max-width: 1040px) 1000px,
                                    1200px`;
            imageElement.src = gallery.images[index].file;
            imageContainer.appendChild(imageElement);
            galleryContainer.appendChild(imageContainer);
        }
    }
}

function displayHamMenu(){
    const hamburgerMenu = document.querySelector('.gallery__menu');
    //const exit = document.querySelector('.gallery__exit');

    hamburgerMenu.style.display = 'block'; 

   /* exit.addEventListener('click', event => {
        hamburgerMenu.style.display = 'none';
    }) */

}
setUpGallery();

/****** Event listeners *********/

const logo = document.querySelector('.gallery__hamburger');
logo.addEventListener('click', displayHamMenu);
