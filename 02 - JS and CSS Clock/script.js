const secondhand = document.querySelector('.second-hand'); // Get the second hand element
const minutehand = document.querySelector('.min-hand'); // Get the minute hand element
const hourhand = document.querySelector('.hour-hand'); // Get the hour hand element

const tickAudio = document.getElementById('tickAudio'); // Get the tick sound audio element

function playTickSound() { 
    tickAudio.currentTime = 0; // Reset audio to the beginning to allow rapid playback
    tickAudio.play() // Play the tick sound
        .then(() => {  
            console.log('Tick sound played'); // Log success message
        })
        .catch(error => {
            console.error('Error playing tick sound:', error); // Log error message
        });
}

function setDate() {
    const now = new Date(); // Get the current date and time

    const seconds = now.getSeconds(); // Get the current seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // Convert seconds to degrees
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`; // Apply the rotation to the second hand

    const minutes = now.getMinutes(); // Get the current minutes
    const minutesDegrees = ((minutes / 60) * 360) + 90; // Convert minutes to degrees
    minutehand.style.transform = `rotate(${minutesDegrees}deg)`; // Apply the rotation to the minute hand

    const hours = now.getHours(); // Get the current hours
    const hoursDegrees = ((hours / 12) * 360) + 90; // Convert hours to degrees
    hourhand.style.transform = `rotate(${hoursDegrees}deg)`; // Apply the rotation to the hour hand

    playTickSound(); // Play the tick sound
}

setInterval(setDate, 1000); // Call the setDate function every second to update the clock
setDate(); // Call the setDate function immediately to prevent the hands from starting at 90 degrees