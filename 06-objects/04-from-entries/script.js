/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    document.getElementById("run").addEventListener("click", () => {
        

    let newt = [];

    for (let i = 0; i < keys.length; i++){
        let suivant = [];
        suivant.push(keys[i]);
        suivant.push(values[i]);  
        newt.push(suivant);
    }
    
    let final = Object.fromEntries(newt);
    console.log(final);
    
    });
})();
