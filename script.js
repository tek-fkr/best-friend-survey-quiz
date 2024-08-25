document.getElementById('playSoundBtn').addEventListener('click', function() {
    const sound = new Audio('media/girlCry.mp3'); // Ensure the path to your sound file is correct
    sound.volume = 0.8; // Start with low volume
    sound.play().catch(error => {
        console.error('Error playing sound:', error);
    });

    // Gradually increase the volume
    let volumeLevel = 0.1; // Start volume
    const volumeIncrease = 0.1; // Volume increment
    const interval = 200; // Time interval (ms)

    const volumeInterval = setInterval(function() {
        if (volumeLevel < 1.0) {
            volumeLevel += volumeIncrease;
            sound.volume = Math.min(volumeLevel, 1.0); // Ensure volume does not exceed 1.0
            console.log(`Volume level: ${sound.volume}`); // Debugging line to check volume level
        } else {
            clearInterval(volumeInterval); // Stop when max volume is reached
        }
    }, interval); // Adjust the interval time to control how fast the volume increases
});
