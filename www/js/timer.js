function timer(){
	var timer = new Tock({
                    callback: function () {
                        $('#clockface').val(timer.msToTime(timer.lap()));
                    }
                });
                var countdown = Tock({
                    countdown: true,
                    // interval: 1000,
                    callback: function () {
                        console.log(countdown.lap());
                        $('#countdown_clock').val(timer.msToTimecode(countdown.lap()));
                    },
                    complete: function () {
                        console.log('end');
                        //alert("Time's up!");
                        document.getElementById('gong-sound').play();
                        //var audio = new Audio('../audio/Gong_long_quiet.mp3');
                        //audio.play();
                    }
                });
                $('#startCountdown').on('click', function () {
                    countdown.start($('#countdown_clock').val());
                });
                $('#pauseCountdown').on('click', function () {
                    countdown.pause();
                });
                $('#stopCountdown').on('click', function () {
                    countdown.stop();
                });
                $('#resetCountdown').on('click', function () {
                    countdown.stop();
                    $('#countdown_clock').val('10:00');
                });
}