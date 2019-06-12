/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        
     
        let resuladd = one + two ;
        let resulsub = one - two ;
        let resulmul = one * two ;
        let resuldiv = one / two ;
        
        switch (operation) {
            case "addition" :
                alert(resuladd);
                break;
            case "substraction" :
                alert(resulsub);
                break;
            case "multiplication" :
                alert(resulmul);
                break;
            case "division" :
                alert(resuldiv);
                break;
            default:
                alert("Raté");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
