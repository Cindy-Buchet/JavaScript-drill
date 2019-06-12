/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let un = document.getElementById("pass-one");
    let deux = document.getElementById("pass-two");

    document.getElementById("run").addEventListener("click", () => {
  
        if (un.value === deux.value){
            alert("Bien joué!");
        } else {
            un.style.border = "1px solid red";
            deux.style.border = "1px solid red";

        }
    });
    
})();
