/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let un = document.getElementById("pass-one");
    
    un.addEventListener('input', function (evt) {  
        let num = /[1-9]/g;
        let val = un.value;
        let result = val.match(num);

        let compteur = document.querySelector("#validity");

        if (un.textLength > 8 && result.length == 2) {
            compteur.innerHTML = "ok";
        } else {
            compteur.innerHTML = "pas ok";
        }
        
    });
})();
