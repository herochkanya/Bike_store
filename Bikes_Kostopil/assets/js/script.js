// Плавне переміщення між секціями
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        // Плавне прокручування до потрібної секції
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Додаткові ефекти при скролі
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const scrollPos = window.scrollY;

    // Коли прокручено більше 100px, шапка та підвал отримують клас 'scrolled'
    if (scrollPos > 100) {
        header.classList.add('scrolled');
        footer.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        footer.classList.remove('scrolled');
    }
});

// Отримуємо кнопку "Нагору"
const scrollToTopButton = document.getElementById('scrollToTop');

// Слухаємо подію прокрутки
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible'); // Показуємо кнопку
    } else {
        scrollToTopButton.classList.remove('visible'); // Приховуємо кнопку
    }
});

// Додаємо анімацію прокручування та анімацію кнопки
scrollToTopButton.addEventListener('click', () => {
    // Анімація кнопки "Нагору"
    scrollToTopButton.classList.add('button-click-animation');
    setTimeout(() => {
        scrollToTopButton.classList.remove('button-click-animation');
    }, 400);

    // Плавне прокручування до верху сторінки
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Показ/Приховування каталогу при натисканні на кнопку
document.getElementById('toggleCategories').addEventListener('click', function () {
    const categories = document.getElementById('categories');
    categories.style.display = categories.style.display === 'none' || categories.style.display === '' ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    // Кнопка "Дивитись інші"
    const viewOthersBtn = document.getElementById("viewOthers");
    const menuSection = document.getElementById("menu");

    viewOthersBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Відміняємо стандартну дію посилання
        menuSection.scrollIntoView({ behavior: "smooth" }); // Прокручуємо до секції "menu"
    });

    // Кнопка "Переглянути асортимент"
    const viewAssortmentBtn = document.getElementById("viewAssortment");
    const aboutSection = document.getElementById("menu");

    viewAssortmentBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Відміняємо стандартну дію посилання
        aboutSection.scrollIntoView({ behavior: "smooth" }); // Прокручуємо до секції "about"
    });
});


// Отримуємо кнопки за їхніми id
const damkiButton = document.getElementById('damki');
const ramaButton = document.getElementById('rama');
const sportivniButton = document.getElementById('sportivni');

// Колір фону за замовчуванням (у CSS вже встановлений)
const defaultColorClass = ''; // Використовуємо стандартний колір з CSS
const activeColorClass = 'active'; // Клас для червоного кольору фону

// Функція для зміни кольору фону та тексту кнопки
function toggleButtonColor(button) {
    if (button.classList.contains(activeColorClass)) {
        button.classList.remove(activeColorClass);  // Видалення червоного кольору та білого тексту при повторному натисканні
    } else {
        button.classList.add(activeColorClass);  // Додавання червоного кольору фону та білого тексту при натисканні
    }
}

// Додаємо обробники подій для кожної кнопки
damkiButton.addEventListener('click', function(event) {
    event.preventDefault();  // Запобігаємо переходу по посиланню
    toggleButtonColor(damkiButton);
});

ramaButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleButtonColor(ramaButton);
});

sportivniButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleButtonColor(sportivniButton);
});
