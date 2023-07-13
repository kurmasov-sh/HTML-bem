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
        console.log("123")
        requestAnimationFrame(SetStyle);


    }
    SetStyle();
    
    parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
        

    });

}

