// Somesh HackVerse V2 - Text Tools


document.addEventListener("DOMContentLoaded", () => {


    const textInput = document.querySelector("#textInput");

    const countBtn = document.querySelector("#countBtn");

    const copyBtn = document.querySelector("#copyBtn");

    const clearBtn = document.querySelector("#clearBtn");

    const result = document.querySelector("#textResult");



    if(!textInput) return;



    countBtn.addEventListener("click", () => {


        const length = textInput.value.length;


        result.innerHTML =

        `Characters: ${length}`;


    });




    copyBtn.addEventListener("click", async () => {


        if(textInput.value === ""){


            result.innerHTML = "Nothing to copy";

            return;

        }



        await navigator.clipboard.writeText(

            textInput.value

        );



        result.innerHTML =

        "Text copied successfully ✅";


    });





    clearBtn.addEventListener("click", () => {


        textInput.value = "";


        result.innerHTML =

        "Characters: 0";


    });



});
