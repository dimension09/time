window.onload = () => {
    'use srtict'
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);
    // var timeback = document.querySelectorAll('#timeback');
    //var currenttime = document.querySelectorAll('#curenttime');
    // document.querySelector('#currenttime').value = 'hello';
    // /currenttime.innerHTML = new Date(3600 * 24 * 1000);
      
    
    

    setInterval(() => {
        var d = new Date();
        var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        // var hour = ` ${d.getHours()} `;
        var currentColor = `${d.getHours()}` + `${d.getMinutes()}` + `${d.getSeconds()}`;
        // var hourstring = toString(hour);
        console.log(currentColor);

        document.getElementById('currenttime').innerHTML = currentTime;
        document.getElementById('timeback').style.backgroundColor = `#${currentColor}`;
        document.getElementById('currentcolor').innerHTML = `#${currentColor}`;


    }, 1000);
    

    console.log('hello');

}
    
    