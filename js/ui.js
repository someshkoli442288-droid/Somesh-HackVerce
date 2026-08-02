// Somesh HackVerse V2 - UI Controller


document.addEventListener("DOMContentLoaded", () => {


    // Add loaded class

    document.body.classList.add("loaded");



    // Card click effect


    const cards = document.querySelectorAll(".card");


    cards.forEach(card => {


        card.addEventListener("click", () => {


            card.style.opacity = "0.8";


            setTimeout(() => {

                card.style.opacity = "1";

            }, 200);


        });


    });



});
