let secondPipe = document.querySelector(".second");
let minutePipe = document.querySelector(".minute");
let hourPipe = document.querySelector(".hour");





setInterval(function(){
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    secondPipe.style.transform = `translateX(-50%) rotate(${second*6}deg)`;
    minutePipe.style.transform = `translateX(-50%) rotate(${minute*6}deg)`;
    hourPipe.style.transform = `translateX(-50%) rotate(${(hour)*30+(minute/2)}deg)`;
    
    // console.log(second)
    console.log(minute)
    // console.log(hour)

},1000)



