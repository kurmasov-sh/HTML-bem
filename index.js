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

}

