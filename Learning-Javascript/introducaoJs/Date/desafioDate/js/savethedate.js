(function () {
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
    
    const dateEvent = getDate(dateEventDOM);

    const ONE_MINUTE = 1000 * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;

    const p = document.createElement("p");
    document.querySelector(".hero-content").appendChild(p);

    function updateDate(){
        const today = new Date();
        let left = dateEvent.getTime() - today.getTime();

        let daysLeft = parseInt(left / ONE_DAY);
        left = left - daysLeft * ONE_DAY;

        let hoursLeft = parseInt(left / ONE_HOUR);
        left = left - hoursLeft * ONE_HOUR

        let minutesLeft = parseInt(left / ONE_MINUTE);
        left = left - minutesLeft * ONE_MINUTE;

        let secondsLeft = parseInt(left / 1000);
        addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    }

    updateDate();

    function addLeftTime(days, hours, minutes, seconds) {

        p.textContent = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o evento.`;
    };

    setInterval(updateDate, 1000);

    function getDate(str){
        const [date, hour] = str.split(" ");
        const [day, month, year] = date.split("/");
        const [hours, minutes] = hour.split(":");
        return new Date(year, month - 1, day, hours, minutes)
    }
})()