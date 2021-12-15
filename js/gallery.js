const gallery =  {
    quotes: [
        {text: 'The photographer that loves architecture and architechtural patterns'},
        {text: 'See the world through patterns'},
    ],

    images: [
        {title: 'Skyscraper', year: 1997, location: 'Kairo', file: './assets/img/gallery/skyscraper.jpg', mobile: './assets/img/gallery/mobile/skyscraper.jpg'},
        {title: 'Copperwall', year: 2010, location: 'Dubai', file: './assets/img/gallery/copper-wall.jpg', mobile: './assets/img/gallery/mobile/copper-wall.jpg'},
        {title: 'White building', year: 1998, location: 'Copenhagen', file: './assets/img/gallery/white-building.jpg', mobile: './assets/img/gallery/mobile/white-building.jpg'},
        {title: 'Wooden wall', year: 2018, location: 'Riga', file: './assets/img/gallery/wooden-wall.jpg', mobile: './assets/img/gallery/mobile/wooden-wall.jpg'},

        {title: 'quote1', year: 0, location: '', file: ''},    

        {title: 'Square building', year: 2021, location: 'Vilnius', file: 'assets/img/gallery/grey-square-building.jpg', mobile: 'assets/img/gallery/mobile/grey-square-buildingjpg'},
        {title: 'Triangle house', year: 2003, location: 'Oslo', file: 'assets/img/gallery/triangle-houses.jpg', mobile: 'assets/img/gallery/mobile/triangle-houses'},
        {title: 'White wall', year: 2005, location: 'Copenhagen', file: 'assets/img/gallery/white-wall.jpg', mobile: 'assets/img/gallery/mobile/white-wall.jpg'},
        
        {title: 'quote2', year: 0, location: '', file: ''},

        {title: 'Wave wall', year: 2008, location: 'Stockholm', file: 'assets/img/gallery/wave-color-pattern.jpg', mobile: 'assets/img/gallery/mobile/wave-color-pattern.jpg'},
        {title: 'Copper house', year: 2011, location: 'Beijing', file: 'assets/img/gallery/copper-house.jpg', mobile: 'assets/img/gallery/mobile/copper-house.jpg'},
        {title: 'Golden walls', year: 2019, location: 'London', file: 'assets/img/gallery/golden-walls.jpg', mobile: 'assets/img/gallery/mobile/golden-walls.jpg'},
    ]
}

function setUpGallery() {
    const galleryContainer = document.querySelector('.gallery');
    
    for (let index = 0; index < gallery.images.length; index++) {
        const imageContainer = document.createElement('div');
        giveContainerClassName(index, imageContainer);
        
        if (index === 4 || index === 8) {
            createQuote(galleryContainer, index);

        }  else { 
            getImages(galleryContainer, imageContainer, index); 
        }
    }
}

function createQuote(galleryContainer, index) {
    const quoteContainer = document.createElement('div');
    const quote = document.createElement('div');

    if (index === 4) {
        quoteContainer.className = 'gallery__quote--left';
        
        quote.innerText = gallery.quotes[0].text;
    } else {
        if (index === 8) {
            quoteContainer.className = 'gallery__quote--right';
            quote.innerText = gallery.quotes[1].text;
        }
    }
    
    quoteContainer.appendChild(quote);
    galleryContainer.appendChild(quoteContainer);
}

function getImages(galleryContainer, imageContainer, index) {

    const imageElement = document.createElement('img');                 /* use src.set to use different versions of images based on screenwidth */
    imageElement.srcset = `${gallery.images[index].mobile} 520w,           
                            ${gallery.images[index].file} 1200w`;

    imageElement.sizes = `  (max-width: 600px) 520px, 
                            1200px`;

    imageElement.src = gallery.images[index].file;
    
    /* add information per image (overlay) */
    const informationContainer = document.createElement('div');
    informationContainer.className = 'gallery__imageInformation';

    const imgTitle = document.createElement('p');
    const imgLocation = document.createElement('p');
    const imgYear = document.createElement('p');

    imgTitle.innerText = gallery.images[index].title;
    imgLocation.innerText = gallery.images[index].location
    imgYear.innerText = gallery.images[index].year;

    imgYear.className = 'gallery__imageInformationYear'

    informationContainer.appendChild(imgTitle);
    informationContainer.appendChild(imgLocation);
    informationContainer.appendChild(imgYear);
    
    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(informationContainer);
    galleryContainer.appendChild(imageContainer);
}

function giveContainerClassName(index, imageContainer) {
    if (index === 0 || index === 3 || index === 5  || index === 9 || index === 10 ) {
        imageContainer.className = 'gallery__image--small';

    } else if (index === 7 || index === 11 ){
        imageContainer.className = 'gallery__image--big';

    } else {
        imageContainer.className = 'gallery__image--medium';
    }
}

setUpGallery();
