/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {

    function clean(array) {
        let out = [];
        let obj = {};
    
        for (i = 0; i < fruits.length; i++) {
          obj[array[i]] = 0;
        }

        for (newFruits in obj) {
          out.push(newFruits);
        }

        return out;
      }

    
    var newNbr = clean(fruits);

    for (let i = 0; i < newNbr.length; i++){
        console.log(newNbr[i]);
    }
});
})();
