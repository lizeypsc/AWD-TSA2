document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.day-button');
    const colorBox = document.getElementById('color-box');

    const emojis = ['🐱', '😼', '😾', '😻', '😽', '😼', '🙀'];

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            const emoji = emojis[index % emojis.length];

            colorBox.style.backgroundColor = color;
            colorBox.innerText = emoji;

            this.style.backgroundColor = color;

            colorBox.classList.add('active');
            setTimeout(() => {
                colorBox.classList.remove('active');
            }, 1000);
        });
    });

    colorBox.style.fontSize = '7rem';
    colorBox.style.textAlign = 'center';
});
