function Date_time(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let period = hours >= 12 ? 'PM' : 'AM'
    if(hours < 10){
        hours = '0' + hours 
    }else if(minute < 10){
        minute = '0' + minute
    }else if(second < 10){
        second = '0' + second
    }
    if(hours <= 11){
        document.querySelector('.greetings').innerText = 'Good Morning !!!'
    }else if(hours <= 15){
        document.querySelector('.greetings').innerText = 'Good AfterNoon !!!'
    }else if(hours <= 19){
        document.querySelector('.greetings').innerText = 'Good Evening !!!'
    }else if(hours <= 24){
        document.querySelector('.greetings').innerText = 'Good Night !!!'
    }

    let h = document.querySelector('.hour');
    let m = document.querySelector('.minute');
    let s = document.querySelector('.second');
    let P = document.querySelector('.AMPM');

    h.innerHTML = hours;
    m.innerHTML = minute;
    s.innerHTML = second;
    P.innerHTML = period;
    // h.innerText = hours;
    // m.innerText = minute;
    // s.innerText = second;
    // P.innerText = period;

};
    setInterval(Date_time,1000);