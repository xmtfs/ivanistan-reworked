//THIS CODE IS OWNED BY THE REPUBLIC OF IVANISTAN USE IS ALLOWED BUT COPYING IS NOT
function addLeadingZero(n) {
    if (n < 10) {
        n = "0" + n;
    }
    return n;
}

function windTheClock()
{
    var d = new Date();
    var timeZoneOffset = -d.getTimezoneOffset()/60;
    d.setHours(d.getUTCHours() + timeZoneOffset); 
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = addLeadingZero(h);
    m = addLeadingZero(m);
    s = addLeadingZero(s);
    document.all["time"].innerHTML = h + ":" + m + ":" + s;
    setTimeout(function(){ windTheClock(timeZoneOffset) }, 1000);
}

window.onload = function() {
    windTheClock();
}



