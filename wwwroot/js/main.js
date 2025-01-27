
//Eventlyssnare
document.addEventListener("DOMContentLoaded", function() {
    //Array med bilder
    const images = ["./images/yellow-flowers.jpg", "./images/woman.jpg", "./images/sea.jpg", "./images/forest.jpg"];
    let currentIndex = 0;

    const imageEl = document.getElementById("image");
    //Eventlyssnare vid klick på bild
    imageEl.addEventListener("click", function() {
        //Öka index med 1 och återställ till 0 vid arrayens slut
        currentIndex = (currentIndex + 1) % images.length;
        //Hämta ny bild
        imageEl.src = images[currentIndex];
    })
})


