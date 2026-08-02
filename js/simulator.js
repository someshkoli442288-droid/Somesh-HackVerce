// Somesh HackVerse - Simulator Common Logic


document.addEventListener("DOMContentLoaded", () => {


    const form = document.querySelector(".simulator-form");


    if (form) {


        form.addEventListener("submit", (event) => {


            event.preventDefault();


            const input = document.querySelector("#username");


            const result = document.querySelector("#result");


            if (input && result) {


                const value = input.value.trim();



                if (value === "") {


                    result.innerHTML =
                    "Please enter a value";


                    return;


                }



                // Safe simulator output

                result.innerHTML =

                "Generated Simulation ID: " +
                value.substring(0,3).toUpperCase() +
                "-X" +
                Math.floor(Math.random()*999);



            }


        });


    }


});
