/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
            un.classList.add("error");
            deux.classList.add("error");
        }
    });
})();
