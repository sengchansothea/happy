window.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animatedText');
    const textContent = textElement.textContent;
    textElement.textContent = '';

    // Split text into individual letters
    [...textContent].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('hidden');
        textElement.appendChild(span);

        // Add delay to each letter
        setTimeout(() => {
            span.classList.add('show');
        }, index * 150);
    });
});
