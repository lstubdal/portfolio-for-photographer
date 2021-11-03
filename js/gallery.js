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
    const galleryContainer = document.querySelector('.galleryContainer');

    for (let index = 0; index < gallery.images.length; index++) {
        
        const imageContainer = document.createElement('div');

        if (index === 0 || index === 3 || index === 5 || index === 8 || index === 10 || index === 13) {
            imageContainer.className = '.galleryContainer__image galleryContainer__image--small';
        } else {
            imageContainer.className = '.galleryContainer__image galleryContainer__image--big';
        }

        if (index === 4) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'galleryContainer__quote--left';

            const quote = document.createElement('div');
            quote.innerText = gallery.quotes[0].text;

            quoteContainer.appendChild(quote);
            galleryContainer.appendChild(quoteContainer);

        } else if (index === 9) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'galleryContainer__quote--right';

            const quote = document.createElement('div');
            quote.innerText = gallery.quotes[1].text;

            quoteContainer.appendChild(quote);
            galleryContainer.appendChild(quoteContainer);
            
        } else { 
            
            const imageElement = document.createElement('img');
            imageElement.srcset = `${gallery.images[index].mobile} 440w,
                                    ${gallery.images[index].tablet} 640w,
                                    ${gallery.images[index].file} 800w`;
            imageElement.sizes = `(max-width: 420px) 440px, 
                                    (max-width: 660px) 640px,
                                    800px`;
            imageElement.src = gallery.images[index].file;
            imageContainer.appendChild(imageElement);
            galleryContainer.appendChild(imageContainer);
        }
    }
}
function displayHamMenu(){
    console.log('button clicked');

}
setUpGallery();

/****** Event listeners *********/

const logo = document.querySelector('.gallery__nav--mobile');
logo.addEventListener('click', displayHamMenu);
