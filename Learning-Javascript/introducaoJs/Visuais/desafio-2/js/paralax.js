(function() {
    window.addEventListener('scroll', positionImage);

    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(container){
        return container.getBoundingClientRect().top <= 0;
    }

    function getNewPosition(c){
        const v = parseFloat(c.getAttribute("data-p-velocity")) || .5;
        return c.getBoundingClientRect().top * v * -1;
    }

    function positionImage(){
        dataParalaxContainer.forEach(item => {
            let originalPositionY = getComputedStyle(item).backgroundPositionY;
            let originalPositionX = getComputedStyle(item).backgroundPositionX;

            if(isGettingOut(item)){
                item.style.backgroundPosition = `${originalPositionX} ${getNewPosition(item)}px`;
            }
            else{
                item.style.backgroundPosition = `${originalPositionX} 0px`;
            }
        })
    };

    positionImage();
})();