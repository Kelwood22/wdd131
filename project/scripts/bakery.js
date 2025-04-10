

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = `${currentYear}`;
document.getElementById('lastModified').textContent = `${lastModified}`;

const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navigation.classList.toggle('open');
});


const imagesContainer = document.querySelector('.carousel-images');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (imagesContainer) {
    let currentIndex = 0;

    const savedIndex = localStorage.getItem('carouselIndex');
    if (savedIndex !== null) {
        currentIndex = parseInt(savedIndex, 10);
    }

    function updateCarousel() {
        const imageWidth = imagesContainer.querySelector('img').clientWidth + 10;
        const totalImages = imagesContainer.children.length;

        currentIndex = Math.max(0, Math.min(currentIndex, totalImages - 1));

        localStorage.setItem('carouselIndex', currentIndex);

        imagesContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        const totalImages = imagesContainer.children.length;
        currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : totalImages - 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
}

const macarons = [
    {
        name: "Vanilla Bean",
        description: "A classic flavor with a creamy vanilla filling.",
        price: 2.50,
        image: "images/vanilla-bean.webp",
        alt: "Vanilla Bean Macaron",
    },
    {
        name: "Cotton Candy",
        description: "A sweet and nostalgic flavor reminiscent of fairgrounds.",
        price: 2.50,
        image: "images/cotton-candy.webp",
        alt: "Cotton Candy Macaron",
    },
    {
        name: "Dulce de Leche",
        description: "A rich and creamy caramel filling.",
        price: 2.50,
        image: "images/dulce-de-leche.webp",
        alt: "Dulce de Leche Macaron",
    },
    {
        name: "Dutch Chocolate",
        description: "A rich chocolate flavor with a smooth filling.",
        price: 2.50,
        image: "images/dutch-chocolate.webp",
        alt: "Dutch Chocolate Macaron",
    },
    {
        name: "Lavender",
        description: "A floral flavor with a hint of sweetness.",
        price: 2.50,
        image: "images/lavender.webp",
        alt: "Lavender Macaron",
    },
    {
        name: "Lemon Meringue",
        description: "A tart lemon filling with a light meringue flavor.",
        price: 2.50,
        image: "images/lemon-meringue.webp",
        alt: "Lemon Meringue Macaron",
    },
    {
        name: "Pistachio",
        description: "A nutty flavor with a creamy pistachio filling.",
        price: 2.50,
        image: "images/pistachio.webp",
        alt: "Pistachio Macaron",
    },
    {
        name: "Raspberry Lemon",
        description: "A tart raspberry filling with a hint of lemon.",
        price: 2.50,
        image: "images/raspberry-lemon.webp",
        alt: "Raspberry Lemon Macaron",
    },
    {
        name: "Orange Creamsicle",
        description: "A sweet orange filling with a creamy texture.",
        price: 2.50,
        image: "images/orange-creamsicle.webp",
        alt: "Orange Creamsicle Macaron",
    },
    {
        name: "Cherry Chocolate",
        description: "A sweet cherry filling with a rich chocolate flavor.",
        price: 2.50,
        image: "images/cherry-chocolate.webp",
        alt: "Cherry Chocolate Macaron",
    },
    {
        name: "Peach",
        description: "A sweet peach filling with a hint of cream.",
        price: 2.50,
        image: "images/peach.webp",
        alt: "Peach Macaron",
    },
    {
        name: "Starlight Mint", 
        description: "A refreshing mint flavor with a hint of sweetness.",
        price: 2.50,
        image: "images/starlight.webp",
        alt: "Starlight Mint Macaron",
    }

];

const macaronContainer = document.getElementById("macaronContainer");
if (macaronContainer) {
    function displayMacarons(macarons) {
        macaronContainer.innerHTML = ""; 

        macarons.forEach(macaron => {
            const macaronCard = document.createElement("div");
            macaronCard.classList.add("macaron-card");

            const macaronImage = document.createElement("img");
            macaronImage.src = `${macaron.image}`;
            macaronImage.alt = `${macaron.alt}`;
            macaronImage.loading = "lazy";
            macaronCard.appendChild(macaronImage);

            const macaronName = document.createElement("h3");
            macaronName.textContent = `${macaron.name}`;
            macaronCard.appendChild(macaronName);

            const macaronDescription = document.createElement("p");
            macaronDescription.textContent = `${macaron.description}`;
            macaronCard.appendChild(macaronDescription);

            const macaronPrice = document.createElement("p");
            macaronPrice.textContent = `$${macaron.price.toFixed(2)}`;
            macaronCard.appendChild(macaronPrice);

            macaronContainer.appendChild(macaronCard);
        });
    }

    function displayAllMacarons() {
        displayMacarons(macarons);
    };

    displayAllMacarons();
}

function handleFormSubmission(form, confirmationMessage) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        form.style.display = "none";
        confirmationMessage.classList.remove("hidden");
    });
}

const orderForm = document.getElementById("orderForm");
const orderConfirmationMessage = document.getElementById("orderConfirmationMessage");
if (orderForm && orderConfirmationMessage) {
    handleFormSubmission(orderForm, orderConfirmationMessage);
}

const contactForm = document.getElementById("contactForm");
const contactConfirmationMessage = document.getElementById("contactConfirmationMessage");
if (contactForm && contactConfirmationMessage) {
    handleFormSubmission(contactForm, contactConfirmationMessage);
}


