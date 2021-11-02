const gallery =  {
    quotes: [
        {text: 'The photographer that loves architecture and architechtural patterns'},
        {text: 'See the world through patterns'},
    ],
    images: [
        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: 'assets/img/gallery/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: 'assets/img/gallery/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: 'assets/img/gallery/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: 'assets/img/gallery/wooden-wall.jpg'},

        {title: 'quote1', year: 0, location: '', file: ''},    

        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: 'assets/img/gallery/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: 'assets/img/gallery/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: 'assets/img/gallery/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: 'assets/img/gallery/wooden-wall.jpg'},

        {title: 'quote2', year: 0, location: '', file: ''},

        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: 'assets/img/gallery/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: 'assets/img/gallery/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: 'assets/img/gallery/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: 'assets/img/gallery/wooden-wall.jpg'},
    ]
}

function setUpGallery() {
    const galleryContainer = document.querySelector('.galleryContainer');

    for (let index = 0; index < gallery.images.length; index++) {
        
        const imageContainer = document.createElement('div');

        if (index === 0 || index === 3 || index === 5 || index === 8 || index === 10 || index === 13) {
            imageContainer.className = '.galleryContainer__image galleryContainer__image--small';
        } else {
            imageContainer.className = '.galleryContainer__image galleryContainer__image--medium';
        }

        
        if (index === 4) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'galleryContainer__quote--big';

            const quote = document.createElement('div');
            quote.className = 'galleryContainer__quote';

            quote.innerText = gallery.quotes[0].text;

            quoteContainer.appendChild(quote);
            galleryContainer.appendChild(quoteContainer);

        } else if (index === 9) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'galleryContainer__quote--big';

            const quote = document.createElement('div');
            quote.className = 'galleryContainer__quote';

            quote.innerText = gallery.quotes[1].text;

            quoteContainer.appendChild(quote);
            galleryContainer.appendChild(quoteContainer);
            
        } else { 
            
            const imageElement = document.createElement('img');
            imageElement.src = gallery.images[index].file;

            imageContainer.appendChild(imageElement);
            galleryContainer.appendChild(imageContainer);
        }
    }
}

setUpGallery();