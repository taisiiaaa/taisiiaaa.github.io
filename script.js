document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-content');
    const frames = document.querySelectorAll('.frame');
    const frameWidth = frames[0].offsetWidth + 1000; // ширина одного кадру плюс відстань 1000px
    let currentIndex = 0;

    function updateScrollPosition() {
        scrollContainer.style.transform = `translateX(calc(50vw - ${currentIndex * frameWidth + 175}px))`;
    }

    // Початкове розташування першої картинки посередині
    updateScrollPosition();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            currentIndex = Math.min(currentIndex + 1, frames.length - 1);
            updateScrollPosition();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateScrollPosition();
        }
    });

    document.addEventListener('click', (e) => {
        const clickX = e.clientX;
        const screenWidth = window.innerWidth;
        if (clickX > screenWidth / 2) {
            currentIndex = Math.min(currentIndex + 1, frames.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateScrollPosition();
    });
});

function toggleFilter(filterId) {
    const filterOptions = document.getElementById(filterId);
    if (filterOptions.style.display === "none" || filterOptions.style.display === "") {
        filterOptions.style.display = "flex";
    } else {
        filterOptions.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const productItems = document.querySelectorAll(".product-item, .product-item2, .product-item3");

    productItems.forEach((item) => {
        const images = item.querySelectorAll(".product-image");

        if (images.length === 2) {
            const [originalImage, hoverImage] = images;

            item.addEventListener("mouseover", function () {
                originalImage.style.opacity = 0;  // Ховаємо початкове зображення
                hoverImage.style.opacity = 1;     // Показуємо зображення при наведенні
            });

            item.addEventListener("mouseout", function () {
                originalImage.style.opacity = 1;  // Показуємо початкове зображення
                hoverImage.style.opacity = 0;     // Ховаємо зображення при наведенні
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

function showContent(scent) {
    const imagePath = {
        'strawberry': 'c:/Users/Taisia/OneDrive/Рабочий стол/popularscents1.jpg',
        'vanilla': 'c:/Users/Taisia/OneDrive/Рабочий стол/popularscents2.jpg',
        'soft': 'c:/Users/Taisia/OneDrive/Рабочий стол/popularscents3.jpg',
        'somebody': 'c:/Users/Taisia/OneDrive/Рабочий стол/popularscents4.jpg',
        'apricot': 'c:/Users/Taisia/OneDrive/Рабочий стол/popularscents5.jpg',
        'solar': 'c:/Users/Taisia/OneDrive/Рабочий стол/popularscents6.jpg'
    };

    const textContent = {
        'strawberry': 'A playful fusion of pulpy red strawberries and juicy plum nectar opens this scent, evolving into a sophisticated mix of fresh florals with amber and tonka bean. This complex, memorable fragrance is like a love note sealed with a kiss.',
        'vanilla': 'This rich perfume combines the iconic creaminess of vanilla with a spicy twist of pink pepper and sugar, settling into cashmere, sandalwood, and a higher concentration for lasting allure.',
        'soft': 'Dive into the seductive blend of soft citrus and watery florals, leading to a sensual finish of amber and musk. Soft Spot captures the essence of intimacy, wrapping you in a skin-on-skin caress.',
        'somebody': 'Starting with a fresh burst of bergamot, this scent transitions through watery cyclamen and leathery saffron, ending in a cozy mix of creamy sandalwood and spicy amber for an intimate embrace.',
        'apricot': 'A luxurious scent that begins with apricot and plum, seasoned with cardamom. It elegantly transitions into floral notes of peonies and jasmine, anchored by tonka, sandalwood, and agarwood for a sophisticated finish.',
        'solar': 'Sparkling with bold citrus like Bergamot and Red Mandarin, this golden floral musk shines with Neroli and Jasmine, wrapped in the warmth of Musk, Driftwood, and Sea Salt to evoke sun-kissed skin.'
    };

    const imageContainer = document.getElementById('image-container');
    const textContainer = document.getElementById('text-container');

    // Set the background image
    imageContainer.style.backgroundImage = `url('${imagePath[scent]}')`;

    // Set the text content
    textContainer.textContent = textContent[scent];

    // Show the containers
    imageContainer.style.display = 'block';
    textContainer.style.display = 'block';
}

function hideContent() {
    const imageContainer = document.getElementById('image-container');
    const textContainer = document.getElementById('text-container');

    // Hide the containers
    imageContainer.style.display = 'none';
    textContainer.style.display = 'none';
}





















