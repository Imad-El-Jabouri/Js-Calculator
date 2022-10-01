let inp__result = document.querySelector('#inp_result');
let my_buttons = Array.from(document.getElementsByClassName('button'));


my_buttons.map(button => {
    button.addEventListener('click', (e) => {
        /* Show The Value Of The Clicked Button */
        inp__result.value += e.target.dataset.key;


        /* On Click On The Equal Button */
        if (e.target.innerHTML === "=") {

            /* Get The Operation without the equal symbol */
            let get_operation_without_equal_symbol = inp__result.value.split("=")[0];

            /* Clear The Operation And Then Display The Result On The input Result Field */
            inp__result.value = "";
            inp__result.value += eval(get_operation_without_equal_symbol);
        }

        /* Clear All */
        if (e.target.innerHTML === "AC") {
            inp__result.value = "";
        }

    })
})