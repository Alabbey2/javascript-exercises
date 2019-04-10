document.addEventListener("DOMContentLoaded", function(event) {
    setInterval(displayTime, 1000);

    function displayTime() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var seconds = now.getSeconds();
        
       
        
        var secondsAngle = seconds*6;
        var minAngle = min*6 + seconds/60 * 6;
        var hourAngle = hr*30 + seconds/3600 * 30;

        document.getElementById('hour').style.transform = 'rotate(' + hourAngle + 'deg)';
        document.getElementById('minute').style.transform='rotate(' + minAngle + 'deg)';
        document.getElementById('second').style.transform='rotate(' + secondsAngle + 'deg)';

        function updateArmsLocation() {
            secondsAngle += 6;
            minAngle += 0.1;
            hourAngle += 1/120;
        }

        setInterval(updateArmsLocation, 1000);

    }
});

/*document.body.innerHTML = "the time now is:" + hr + ":" + min + ":" + seconds;*/
