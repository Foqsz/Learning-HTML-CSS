(function(){
    const userName = "Victor";

    const element = document.querySelector(".top-bar p");

    if(userName) 
    {
        element.innerHTML += "<b> " + userName + "</b>"; 
    }

    else
    {
        const elementRemove = element.parentElement;
        elementRemove.parentElement.removeChild(elementRemove);
    }



})()