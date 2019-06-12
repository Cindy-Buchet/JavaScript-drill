/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let colorstab = ["red", "blue", "yellow", "white", "black","green","violet"];


    document.getElementById("run").addEventListener("click", () => {
        let randomcolor = colorstab[Math.floor(Math.random()*colorstab.length)];
        document.querySelector("html").style.background = randomcolor;  
    });

})();
