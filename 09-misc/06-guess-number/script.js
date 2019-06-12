/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let rand = Math.floor(Math.random() * Math.floor(100));
    console.log(rand);
    let number;
    let tenta = 0;

    while (rand != number) {
        let number = prompt("Donnez moi un numéro");
        tenta = tenta + 1;
        
        if (number < rand){
            alert("C'est plus");
        } else if (number > rand) {
            alert("C'est moins");
        } else {
            alert("Bravo, tu as trouvé en "+tenta+" coups.");
            break;
        }

    }
    ;
})();
