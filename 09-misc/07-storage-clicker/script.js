/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("target").innerHTML =  localStorage.clickcount;
    
    document.getElementById("increment").addEventListener("click", () => {

        if(typeof(Storage) !== "undefined") {

          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("target").innerHTML =  localStorage.clickcount;

        }
      
});


   
})();
