// Somesh HackVerse V2 - Main JavaScript


document.addEventListener("DOMContentLoaded", () => {


    const startBtn = document.querySelector("#startBtn");


    if (startBtn) {


        startBtn.addEventListener("click", () => {


            const toolsSection = document.querySelector(".cards");


            if (toolsSection) {


                toolsSection.scrollIntoView({

                    behavior: "smooth"

                });


            }


        });


    }



});
