'use strict';

$(document).ready(function() {

    var cheatCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    var codeIndex = 0;
    var audio = new Audio('css/Nes Contra Soundtrack.mp3');

    $(document).on('keyup', function(e) {
        var keyPressed = e.keyCode;
        var currentKey = cheatCode[codeIndex];

        $('#key-display').html(e.key);

        if (keyPressed === currentKey) {
            codeIndex++;
        } else {
            codeIndex = 0;
        }
        if (codeIndex === cheatCode.length) {
            alert('YOU GOT 30 lIVES!');
            audio.play();
            $('html').css({'background-size': 'cover','background-image': "url('css/img/Contra.jpg')"});
        }
    });
});




