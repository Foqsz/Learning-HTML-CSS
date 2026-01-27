(() =>{
    let elements = document.querySelectorAll("[data-addclass-on-scroll]");
    window.addEventListener('scroll', addClassOnScroll)

    function isElementIntoView(element){
        let rect = element.getBoundingClientRect();

        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.top >= 0 && rect.bottom <= innerHeight)
        );
    };

    function addClassOnScroll(){
        if(elements.length === 0)
            window.removeEventListener('scroll', addClassOnScroll);

        elements.forEach(element => {
            if(isElementIntoView(element)){
                let delay = parseInt(element.getAttribute("data-addclass-on-scroll-delay")) || 0;

                setTimeout(() => {
                    let _class = element.getAttribute("data-addclass-on-scroll");
                    element.classList.add(_class);
                    element.removeAttribute("data-addclass-on-scroll");
                    element.removeAttribute("data-addclass-on-scroll-delay");
                    elements = document.querySelectorAll("[data-addclass-on-scroll]");
                }, delay);
            };
        });
    };

    addClassOnScroll();
})();

