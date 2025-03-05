const images = document.getElementsByTagName("img");
let image;
for (let i = 0; i < images.length; i++) {
    image = images[i];
    image.addEventListener("click", () => {
        window.open(image.src, "_blank").focus();
    });
};