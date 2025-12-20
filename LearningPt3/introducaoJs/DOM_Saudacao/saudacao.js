(function(){
    const userName = null; 
    
    if(userName) 
    {
        const topBarElement = document.createElement("div");
        topBarElement.className = "top-bar";
        topBarElement.innerHTML = `<p>Bem-vindo(a), ${userName}</p>`;

        const elementoFather = document.querySelector(".hero");

        elementoFather.insertBefore(topBarElement, elementoFather.firstElementChild);
    } 
})()