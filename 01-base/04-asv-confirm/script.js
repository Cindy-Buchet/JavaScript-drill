/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
function dem(){
    let name = prompt("Quel est ton nom?");
    let sexe = prompt("Quel est ton sexe?");
    let ville = prompt("Quel est ta ville?");  
    alert("Tu es un(e) "+ sexe +" qui s'appelle "+ name +" et qui habite à "+ ville);   
}

    dem();
    let r = confirm(" Confirmes-tu?");

        if (r == true) {
            alert("D'accord");
        } else {
            dem();
        } 
})();
