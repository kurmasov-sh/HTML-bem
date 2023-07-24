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
    let currentPosition = 0
    function moveSlides(position) {
        currentPosition = position;
        partnersItems.style.transform = `translateX(${-currentPosition}px)`;
    }

    let isDragging = false;
    let startDragX = 0;
    let startTranslateX = 0;

    partnersItems.addEventListener('mousedown', function (event) {
        isDragging = true;
        startDragX = event.clientX;
        startTranslateX = currentPosition;
        partnersItems.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function (event) {
        if (!isDragging) return;
        const dragOffsetX =  startDragX - event.clientX;
        const newPosition = startTranslateX + dragOffsetX;
        moveSlides(newPosition);
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
        partnersItems.style.cursor = 'grab';

    });

    partnersItems.addEventListener('touchstart', function (event) {
        isDragging = true;
        startDragX = event.touches[0].clientX;
        startTranslateX = currentPosition;
        partnersItems.style.cursor = 'grabbing';
    });

    document.addEventListener('touchmove', function (event) {
        if (!isDragging) return;
        const dragOffsetX =  startDragX - event.touches[0].clientX;
        const newPosition = startTranslateX + dragOffsetX;
        moveSlides(newPosition);
    });

    document.addEventListener('', function () {
        isDragging = false;
        partnersItems.style.cursor = 'grab';

    });
    

    //МОБИЛЬНОЕ МЕНЮ
    function toggleBurger(){
        if(headerBurgerWrapper.classList.contains('open'))
        {
            headerBurgerWrapper.classList.remove('open');
        }
        else
        {   
            headerBurgerWrapper.classList.add('open');
        }       
    }
    
    const header = document.querySelector('header');
    const burgerMenu = document.createElement('div');
    burgerMenu.setAttribute('class', 'header__burger');
    header.appendChild(burgerMenu);
    burgerMenu.addEventListener('click', toggleBurger)
    
    const headerBurgerWrapper = document.createElement('div');
    headerBurgerWrapper.setAttribute('class', 'header__burger-wrapper');
    header.appendChild(headerBurgerWrapper);

    const headerBurgerTop = document.createElement('div');
    headerBurgerTop.setAttribute('class', 'header__burger-top');
    headerBurgerWrapper.appendChild(headerBurgerTop);

    const logo = document.createElement('a');
    logo.setAttribute('class', 'logo');
    logo.setAttribute('href', '#');
    headerBurgerTop.appendChild(logo);

    const headerBurgerTopBtn = document.createElement('img');
    headerBurgerTopBtn.setAttribute('class', 'header__burger-top-btn');
    headerBurgerTopBtn.setAttribute('src', 'images/Group 2.7-burger_close_btn.png');
    headerBurgerTop.appendChild(headerBurgerTopBtn);
    headerBurgerTopBtn.addEventListener('click', toggleBurger)



    const burgerLogo = document.createElement('img');
    burgerLogo.setAttribute('class', 'header__burger-logo');
    burgerLogo.setAttribute('src', 'images/Frame.jpg');
    logo.appendChild(burgerLogo)

    const headerBurgerMenu = document.createElement('div');
    headerBurgerMenu.setAttribute('class', 'header__burger-menu');
    headerBurgerWrapper.appendChild(headerBurgerMenu);


    //цикл для добавления элементов меню burger
    let menuArray = ['Прямая трансляция','Ханты-Мансийск','Новости','Участники','Основная информация','Результаты','Медиа','Контакты']
    let subMenuArray = ['О Ханты-Мансийске','История кубка мира','Информация для участников' ]

    
    for(let i = 0; i < 8; i++){
        if(i === 4)
        {   const headerMenuItem = document.createElement('a');
            headerMenuItem.setAttribute('class', 'link header-menu__item sub-menu-toggler');
            headerMenuItem.setAttribute('href', '#');
            headerMenuItem.textContent = menuArray[i];
            const headerMenuItemSpan = document.createElement('span');
            headerMenuItemSpan.setAttribute('class', 'link header-menu__item header__burger-sub-menu');
            headerMenuItemSpan.appendChild(headerMenuItem);
            headerBurgerMenu.appendChild(headerMenuItemSpan);

            const headerMenuSubMenu = document.createElement('div');
            headerMenuSubMenu.setAttribute('class', 'header-menu__sub-menu')
            headerMenuItemSpan.appendChild(headerMenuSubMenu);
            headerMenuItem.addEventListener('click', () => {
                headerMenuSubMenu.classList.toggle('active')
            });
            for(let i = 0; i < 3; i++)
            {
                const headerSubMenuItem = document.createElement('a');
                headerSubMenuItem.setAttribute('class', 'link header-menu__sub-menu-item');
                headerSubMenuItem.setAttribute('href', '#');
                headerSubMenuItem.textContent = subMenuArray[i];
                headerMenuSubMenu.appendChild(headerSubMenuItem);
            }
            continue;
        }
        const headerMenuItem = document.createElement('a');
        headerMenuItem.setAttribute('class', 'link header-menu__item');
        headerMenuItem.setAttribute('href', '#');
        headerMenuItem.textContent = menuArray[i];
        headerBurgerMenu.appendChild(headerMenuItem);
    }

    const headerBurgerBottom = document.createElement('div');
    headerBurgerBottom.setAttribute('class', 'header__burger-bottom');
    headerBurgerWrapper.appendChild(headerBurgerBottom); 

    const headerSlowVision = document.createElement('a');
    headerSlowVision.setAttribute('class', 'header__slow-vision header__slow-vision_adaptive');
    headerSlowVision.setAttribute('href', '#');
    headerBurgerBottom.appendChild(headerSlowVision);

    const headerLanguages = document.createElement('div');
    headerLanguages.setAttribute('class', 'headerLanguages');
    headerBurgerBottom.appendChild(headerLanguages);

    const headerLanguageItem1 = document.createElement('a');
    headerLanguageItem1.setAttribute('class', 'link header__language-item');
    headerLanguageItem1.textContent = 'RU';
    headerLanguages.appendChild(headerLanguageItem1);

    const headerLanguageItem2 = document.createElement('a');
    headerLanguageItem2.setAttribute('class', 'link header__language-item');
    headerLanguageItem2.textContent = 'EN';
    headerLanguages.appendChild(headerLanguageItem2);

    const contactsPhone = document.createElement('p');
    contactsPhone.setAttribute('class', 'contacts__phone');
    contactsPhone.textContent = '+7 (3467) 555-321'
    headerBurgerBottom.appendChild(contactsPhone);
    const contactsAddress = document.createElement('p');
    contactsAddress.setAttribute('class', 'contacts__address contacts__address_burger');
    contactsAddress.textContent = 'г. Ханты-Мансийск ул. Лопарева,6'
    headerBurgerBottom.appendChild(contactsAddress);

    
    

}

