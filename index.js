const hourEl = document.querySelector('#hour');
const muniteEl = document.querySelector('#munite');
const secondEl = document.querySelector('#second');
const ampmEl = document.querySelector('#ampm');


function upDateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h < 10 ? "0"+ h : h;
    m = m < 10 ? "0"+ m : m;
    s= s < 10 ? "0"+ s : s;

    ampmEl.innerHTML = ampm;
    hourEl.innerHTML = h;
    muniteEl.innerHTML = m;
    secondEl.innerHTML = s;

    h = h < 10 ? "0"+ h : h;
    m = m < 10 ? "0"+ m : m;
    s= s < 10 ? "0"+ s : s;
    
    setTimeout(()=>{
        upDateClock()

    },100)
}
upDateClock()

