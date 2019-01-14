window.onload = () => {
    'use srtict'

    function App () {

        var d = new Date();
        var hours = d.getHours().toString();
        var minutes = d.getMinutes().toString();
        var seconds = d.getSeconds().toString();

        if(hours.length < 2) hours = '0' + hours;
        if(minutes.length < 2) minutes = '0' + minutes;
        if(seconds.length < 2) seconds = '0' + seconds;
        
        var currentTime = hours + ":" + minutes + ":" + seconds;
        var currentColor = hours + minutes + seconds;

        document.getElementById('currenttime').innerHTML = currentTime;
        document.getElementById('timeback').style.backgroundColor = `#${currentColor}`;
        document.getElementById('currentcolor').innerHTML = `#${currentColor}`;
        
    }

    App();

    setInterval(() => {

        App();

    }, 1000);
    
}
    