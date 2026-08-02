// Somesh HackVerse - Simulator Engine

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".simulator-form");

    if (!form) return;


    form.addEventListener("submit", function(e) {

        e.preventDefault();


        const input = document.querySelector("#username");
        const result = document.querySelector("#result");
        const button = form.querySelector("button");


        const username = input.value.trim();


        if (username === "") {

            result.innerHTML = "Please enter username";
            return;

        }


        button.disabled = true;
        button.innerHTML = "Processing...";


        result.innerHTML = `
            <div>
                Checking input...
            </div>
        `;


        setTimeout(() => {

            result.innerHTML = `
                <div>
                    Generating pattern...
                </div>
            `;

        }, 1200);



        setTimeout(() => {


            let cleanName = username
                .replace(/[^a-zA-Z0-9]/g, "")
                .toLowerCase();



            if (cleanName.length < 3) {

                cleanName = "user" + cleanName;

            }



            let numbers = Math.floor(
                1000 + Math.random() * 9000
            );



            let generatedPattern =
                cleanName + "@" + numbers;



            result.innerHTML = `

                <div class="result-card">

                    <h3>Result Generated</h3>

                    <p>
                    Username:
                    ${username}
                    </p>

                    <p>
                    Pattern:
                    ${generatedPattern}
                    </p>

                </div>

            `;


            button.disabled = false;
            button.innerHTML = "Generate";


        }, 3000);



    });


});
