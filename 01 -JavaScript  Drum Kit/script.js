function removeTransition(e) //function to remove the playing class from the key
{
  if (e.propertyName !== 'transform') return; //skip if it's not a transform
  e.target.classList.remove('playing'); //remove playing class from the key
}

function playSound(e) //function to play the sound when the key is pressed
{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select the audio that corresponds to the key pressed
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //select the key that corresponds to the key pressed

  if (!audio) return; //stop the function from running all together

  key.classList.add('playing'); //add playing class to the key
  audio.currentTime = 0; //rewind audio to start so it can be played again
  audio.play(); //play the audio
}

function randomizeVisualizer() {
  const bars = document.querySelectorAll('.bar');
  const maxHeight = 300; // Adjust the maximum height as needed

  bars.forEach(bar => {
    const randomHeight = Math.random() * maxHeight; // Generate a random value between 0 and the specified maximum height
    bar.style.height = `${randomHeight}px`; // Set the height of the bar based on the random value
  });
}

// Call randomizeVisualizer function periodically to update the visualizer
setInterval(randomizeVisualizer, 350); // Update every 350 milliseconds (adjust as needed)

const keys = Array.from(document.querySelectorAll('.key')); //select all the keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //listen for the end of the transition on each key
window.addEventListener('keydown', playSound); //listen for the keydown event on the window

function equalizer()
{
  const equalizerContainer = document.getElementById('equalizer');
  const numBars = 100; // Number of bars you want to generate

  for (let i = 0; i < numBars; i++)
  {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    equalizerContainer.appendChild(bar);
  }
}
equalizer();