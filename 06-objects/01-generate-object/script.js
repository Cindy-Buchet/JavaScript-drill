/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let me = {
        lastname : "Buchet",
        firstname : "Cindy",
        age : 23,
        city : "Charleroi",
        country : "Belgique",   
    }

    document.getElementById("run").addEventListener("click", () => {
        let pres = "Je m'appelle " + me.lastname + " " + me.firstname + " , j'ai " + me.age + " ans et j'habite à " + me.city + " en " + me.country;
        console.log(pres);
    });
    
})();
