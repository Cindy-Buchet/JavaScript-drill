/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let numb = [15,67,84,24,42,98,87,45,26,55];
    
    let tableau = document.querySelectorAll("td");

    document.getElementById("run").addEventListener("click", () => { 

        for (let i = 0; i < tableau.length; i++){
            for (let i = 0; i < numb.length; i++){
                tableau[i].innerHTML = numb[i];
            }
        };    

        let nommin = Math.min(...numb);
        document.getElementById("min").innerHTML = nommin;

        let nommax = Math.max(...numb);
        document.getElementById("max").innerHTML = nommax;

        let add = 0;
        for (let i = 0; i < numb.length; i++){
            add = add + numb[i];
        }

        document.getElementById("sum").innerHTML = add;

        let moy = add / numb.length;

        document.getElementById("average").innerHTML = moy;

     }); 

    
})();
