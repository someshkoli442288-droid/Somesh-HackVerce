// Somesh HackVerse - Main JavaScript


document.addEventListener("DOMContentLoaded", () => {


    const startBtn = document.querySelector("#startBtn");


    if (startBtn) {


        startBtn.addEventListener("click", () => {


            document.querySelector(".cards")
            ?.scrollIntoView({

                behavior: "smooth"

            });


        });


    }



});
