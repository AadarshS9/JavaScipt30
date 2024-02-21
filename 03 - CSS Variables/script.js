const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function changeImage() {
    const imageURL = document.getElementById('imageURL').value; // Corrected to use getElementById
    document.getElementById('mainimage').src = imageURL;
    document.getElementById('mainimage').alt = 'Random image given by the user'; // Corrected to set alt attribute for image
}