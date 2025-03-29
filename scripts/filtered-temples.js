

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manhattan New York",
        location: "New York, New York, United States",
        dedicated: "2004, June, 13",
        area: 20630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-43416.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"   
    },
    {
        templeName: "Birmingham Alabama",
        location: "Gardendale, Alabama, United States",
        dedicated: "2000, September, 3",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-12359.jpg"
    }
    // Add more temple objects here...
];

const templeContainer = document.getElementById("templeContainer");

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        const templeName = document.createElement("h2");
        templeName.textContent = temple.templeName;
        templeCard.appendChild(templeName);

        const templeLocation = document.createElement("p");
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        const templeDedication = document.createElement("p");
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
        templeCard.appendChild(templeDedication);

        const templeArea = document.createElement("p");
        templeArea.textContent = `Total Area: ${temple.area.toLocaleString()} sq. ft.`;
        templeCard.appendChild(templeArea);

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName}`;
        templeImage.loading = "lazy";
        templeCard.appendChild(templeImage);

        templeContainer.appendChild(templeCard);
    });
}

function filterOldTemples() {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year < 1900;
    });
    displayTemples(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year > 2000;
    });
    displayTemples(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
}

function displayAllTemples() {
    displayTemples(temples);
}

document.getElementById("oldTemples").addEventListener("click", (event) => {
    event.preventDefault();
    filterOldTemples();
});
    
document.getElementById("newTemples").addEventListener("click", (event) => {
    event.preventDefault();
    filterNewTemples();
});
    
document.getElementById("largeTemples").addEventListener("click", (event) => {
    event.preventDefault();
    filterLargeTemples();
});
    
document.getElementById("smallTemples").addEventListener("click", (event) => {
    event.preventDefault();
    filterSmallTemples();
});
    
document.getElementById("homeTemples").addEventListener("click", (event) => {
    event.preventDefault();
    displayAllTemples();
});

displayAllTemples();
