/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let un = document.getElementById("pass-one");
    
    function SetMaxLength () {
        var input = document.querySelector('input');
        input.maxLength = 10;
    }
    
    un.addEventListener('input', function (evt) {  
        let verif = un.textLength;
        console.log(verif);

        let compteur = document.querySelector("#counter");
        let cal = verif + "/10";
        compteur.textContent = cal;    
        SetMaxLength();        
        
        if (un.textLength == 10) {
            compteur.style.color = "red";
        }
        
    });

    
})();
