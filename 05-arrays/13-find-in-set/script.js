/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    let nmb = 0;
    document.getElementById("run").addEventListener("click", () => { 
        for (let i = 0; i < people.length; i++){
            console.log(people[i]);
        }
        console.log("Il y a "+people.size+ " personnes");
        let Alex = people.has("Alexandre");
        if (Alex == true){
            console.log("Il y a un Alexandre");
        } else {
            console.log("Il n'y a pas d'Alexandre");
        }
     }); 
})();
