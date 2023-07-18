//ПАРАЛЛАКС

window.onload = function (){
    const parallax = document.querySelector('.parallax');

    const speed = 0.1;
    const forImg = 30; 

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function SetStyle(){
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        parallax.style.cssText = `transform: translate(${positionX / forImg}%, ${positionY / forImg}%);`; 
        requestAnimationFrame(SetStyle);


    }
    SetStyle();
    
    parallax.addEventListener('mousemove', function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
        

    });

    //СЛАЙДЕР

    const partnersItems = document.querySelector('.partners-items');
    const progressBar = document.querySelector('.partners__progress-bar');
    const arrowLeft = document.querySelector('.partners__arrow-left');
    const arrowRight = document.querySelector('.partners__arrow-right');

    const slideWidth = 250; // Width of each slide item
    const slideMargin = 0; // Margin between slide items
    const totalSlides = partnersItems.children.length;
    
    let currentIndex = 0;
    arrowRight.setAttribute('class', 'partners__arrow-right partners__arrow-right_active')

    function checkIndex(){
        if(currentIndex === 0)
        {   
            arrowRight.setAttribute('class', 'partners__arrow-right partners__arrow-right_active')
            arrowLeft.setAttribute('class', 'partners__arrow-left')
        }
        else if(currentIndex === totalSlides)
        {   
            arrowRight.setAttribute('class', 'partners__arrow-right')
            arrowLeft.setAttribute('class', 'partners__arrow-left partners__arrow-left_active')
        }
        else
        {
            arrowLeft.setAttribute('class', 'partners__arrow-left partners__arrow-left_active')
            arrowRight.setAttribute('class', 'partners__arrow-right partners__arrow-right_active')
        }
    }
    // Update progress bar width based on the current slide

    // Slide to the next item
    function slideNext() {
    if (currentIndex < totalSlides) {
        currentIndex++;
        const translateX = -((slideWidth + slideMargin) * currentIndex);
        partnersItems.style.transform = `translateX(${translateX}px)`;
        checkIndex();
    }
    }

    // Slide to the previous item
    function slidePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        const translateX = -((slideWidth + slideMargin) * currentIndex);
        partnersItems.style.transform = `translateX(${translateX}px)`;
        checkIndex();
    }
    }

    // Add event listeners to the arrow controls
    arrowLeft.addEventListener('click', slidePrev);
    arrowRight.addEventListener('click', slideNext);
    

    //МОБИЛЬНОЕ МЕНЮ
    function openBurger(){
        if(window.getComputedStyle(header__burgerWrapper).display === 'none')
        {
            header__burgerWrapper.style.display = 'flex';
            console.log("4")
        }       
    }
    function closeBurger(){
        if(window.getComputedStyle(header__burgerWrapper).display === 'flex')
        {
            header__burgerWrapper.style.display = 'none';
            console.log("213")
        }       
    }
    const header = document.querySelector('header');
    const burgerMenu = document.createElement('div');
    burgerMenu.setAttribute('class', 'header__burger');
    header.appendChild(burgerMenu);
    burgerMenu.addEventListener('click', openBurger);
    
    const header__burgerWrapper = document.createElement('div');
    header__burgerWrapper.setAttribute('class', 'header__burger-wrapper');
    burgerMenu.appendChild(header__burgerWrapper);

    const header__burgerTop = document.createElement('div');
    header__burgerTop.setAttribute('class', 'header__burger-top');
    header__burgerWrapper.appendChild(header__burgerTop);

    const logo = document.createElement('a');
    logo.setAttribute('class', 'logo');
    logo.setAttribute('href', '#');
    header__burgerTop.appendChild(logo);

    const header__burgerTopBtn = document.createElement('img');
    header__burgerTopBtn.setAttribute('class', 'header__burger-top-btn');
    header__burgerTopBtn.setAttribute('src', 'images/Group 2.7-burger_close_btn.png');
    header__burgerTop.appendChild(header__burgerTopBtn);
    header__burgerTopBtn.addEventListener('click', closeBurger);


    const burgerLogo = document.createElement('img');
    burgerLogo.setAttribute('class', 'header__burger-logo');
    burgerLogo.setAttribute('src', 'images/Frame.jpg');
    logo.appendChild(burgerLogo)

    const header__burgerMenu = document.createElement('div');
    header__burgerMenu.setAttribute('class', 'header__burger-menu');
    header__burgerWrapper.appendChild(header__burgerMenu);

    const headerMenu__item1 = document.createElement('a');
    headerMenu__item1.setAttribute('class', 'link header-menu__item');
    headerMenu__item1.setAttribute('href', '#');
    headerMenu__item1.textContent = 'Прямая трансляция';
    header__burgerMenu.appendChild(headerMenu__item1);

    const headerMenu__item2 = document.createElement('a');
    headerMenu__item2.setAttribute('class', 'link header-menu__item');
    headerMenu__item2.setAttribute('href', '#');
    headerMenu__item2.textContent = 'Ханты-Мансийск';
    header__burgerMenu.appendChild(headerMenu__item2);

    const headerMenu__item3 = document.createElement('a');
    headerMenu__item3.setAttribute('class', 'link header-menu__item');
    headerMenu__item3.setAttribute('href', '#');
    headerMenu__item3.textContent = 'Новости';
    header__burgerMenu.appendChild(headerMenu__item3);

    const headerMenu__item4 = document.createElement('a');
    headerMenu__item4.setAttribute('class', 'link header-menu__item');
    headerMenu__item4.setAttribute('href', '#');
    headerMenu__item4.textContent = 'Участники';
    header__burgerMenu.appendChild(headerMenu__item4);
    
    const headerMenu__item5 = document.createElement('span');
    headerMenu__item5.setAttribute('class', 'link header-menu__item header__burger-sub-menu');
    header__burgerMenu.appendChild(headerMenu__item5);

    const headerMenu__item6 = document.createElement('a');
    headerMenu__item6.setAttribute('class', 'link');
    headerMenu__item6.setAttribute('href', '#');
    headerMenu__item6.textContent = 'Основная информация';
    headerMenu__item5.appendChild(headerMenu__item6);

    const headerMenu__item7 = document.createElement('a');
    headerMenu__item7.setAttribute('class', 'link header-menu__item');
    headerMenu__item7.setAttribute('href', '#');
    headerMenu__item7.textContent = 'Результаты';
    header__burgerMenu.appendChild(headerMenu__item7);

    const headerMenu__item8 = document.createElement('a');
    headerMenu__item8.setAttribute('class', 'link header-menu__item');
    headerMenu__item8.setAttribute('href', '#');
    headerMenu__item8.textContent = 'Медиа';
    header__burgerMenu.appendChild(headerMenu__item8);

    const headerMenu__item9 = document.createElement('a');
    headerMenu__item9.setAttribute('class', 'link header-menu__item');
    headerMenu__item9.setAttribute('href', '#');
    headerMenu__item9.textContent = 'Контакты';
    header__burgerMenu.appendChild(headerMenu__item9);

    const header__burgerBottom = document.createElement('div');
    header__burgerBottom.setAttribute('class', 'header__burger-bottom');
    header__burgerWrapper.appendChild(header__burgerBottom); 

    const header__slowVision = document.createElement('a');
    header__slowVision.setAttribute('class', 'header__slow-vision header__slow-vision_adaptive');
    header__slowVision.setAttribute('href', '#');
    header__burgerBottom.appendChild(header__slowVision);

    const header__languages = document.createElement('div');
    header__languages.setAttribute('class', 'header__languages');
    header__burgerBottom.appendChild(header__languages);

    const header__languageItem1 = document.createElement('a');
    header__languageItem1.setAttribute('class', 'link header__language-item');
    header__languageItem1.textContent = 'RU';
    header__languages.appendChild(header__languageItem1);

    const header__languageItem2 = document.createElement('a');
    header__languageItem2.setAttribute('class', 'link header__language-item');
    header__languageItem2.textContent = 'EN';
    header__languages.appendChild(header__languageItem2);

    const contacts__phone = document.createElement('p');
    contacts__phone.setAttribute('class', 'contacts__phone');
    contacts__phone.textContent = '+7 (3467) 555-321'
    header__burgerBottom.appendChild(contacts__phone);
    const contacts__address = document.createElement('p');
    contacts__address.setAttribute('class', 'contacts__address contacts__address_burger');
    contacts__address.textContent = 'г. Ханты-Мансийск ул. Лопарева,6'
    header__burgerBottom.appendChild(contacts__address);

}

