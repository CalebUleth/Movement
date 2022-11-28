
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    if(window.DeviceOrientationEvent){
        window.addEventListener("deviceOrientation", handleMotion);
    }else{
        alert("sorry your browser does not support this");
    }

    function handleMotion(event){
        console.log(event);
        var z = event.alpha;
        var x = event.beta;
        var y = event.gamma;

        $("#z").text("z: " +z)
        $("#x").text("x: " +x)
        $("#y").text("y: " +y)
    }

}
