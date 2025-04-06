document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-link");
    const colorCanvas = document.getElementById("colorCanvas");
    const ctx = colorCanvas.getContext("2d", { willReadFrequently: true });

    colorCanvas.width = colorCanvas.clientWidth;
    colorCanvas.height = colorCanvas.clientHeight;

    // Draw the color stripes on the canvas
    const gradient = ctx.createLinearGradient(0, 0, 0, colorCanvas.height);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'green');
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, colorCanvas.width, colorCanvas.height);

    window.addEventListener("mousemove", function (event) {
        const x = event.offsetX;
        const y = event.offsetY;
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        const tintColor = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, 0.1)`;

        console.log("color:", color);

        socialLinks.forEach(link => {
            link.style.color = color;
            link.style.backgroundColor = tintColor;
        });
    });

    // Reset color to black when leaving the color palette
    colorCanvas.addEventListener("mouseleave", function () {
        socialLinks.forEach(link => {
            link.style.color = "unset";
        });
    });
});
