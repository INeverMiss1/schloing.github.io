const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.addEventListener("click", () => {
        window.open(image.src, "_blank").focus();
    });
};