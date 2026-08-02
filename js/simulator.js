// Somesh HackVerse - Simulation Engine

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".simulator-form");

    if (!form) return;


    form.addEventListener("submit", (e) => {

        e.preventDefault();


        const input = document.querySelector("#username");
        const result = document.querySelector("#result");
        const button = form.querySelector("button");


        if (!input.value.trim()) {

            result.innerHTML = "Please enter username";
            return;

        }


        const username = input.value.trim();


        button.disabled = true;
        button.innerHTML = "Processing...";


        result.innerHTML = `
            <div class="loading">
                Initializing simulation...
            </div>
        `;


        setTimeout(() => {

            result.innerHTML = `
                <div class="loading">
                    Analyzing pattern...
                </div>
            `;

        }, 1000);



        setTimeout(() => {

            result.innerHTML = `
                <div class="loading">
                    Generating simulation result...
                </div>
            `;

        }, 2000);



        setTimeout(() => {


            const code =
            username.substring(0,3).toUpperCase()
            + "-"
            + Math.floor(Math.random() * 9000 + 1000);



            result.innerHTML = `

            <div class="result-card">

                <h3>Simulation Complete</h3>

                <p>
                Username:
                ${username}
                </p>

                <p>
                Generated ID:
                ${code}
                </p>

            </div>

            `;


            button.disabled = false;
            button.innerHTML = "Generate";


        }, 3500);



    });


});
