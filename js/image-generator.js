// Somesh HackVerse V2 - AI Image Generator


document.addEventListener("DOMContentLoaded", () => {


    const button = document.querySelector("#generateBtn");

    const promptInput = document.querySelector("#prompt");

    const result = document.querySelector("#imageResult");



    if (!button) return;



    button.addEventListener("click", () => {



        const prompt = promptInput.value.trim();



        if (prompt === "") {


            result.innerHTML = "Please enter an idea first";

            return;

        }



        button.disabled = true;

        button.innerHTML = "Generating...";



        result.innerHTML = `

        <div>

            Creating your image...

        </div>

        `;



        setTimeout(() => {



            result.innerHTML = `

            <div class="result-card">

                <h3>Image Request Created</h3>

                <p>
                Prompt:
                ${prompt}
                </p>

                <p>
                AI generation system will be connected here.
                </p>

            </div>

            `;



            button.disabled = false;

            button.innerHTML = "Generate Image";



        }, 2500);



    });



});
