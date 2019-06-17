/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener ("click", () =>{
        fetch('http://localhost:3000/heroes').then(function(response) {
            return response.json()
        }).then(value => {
            console.log(value)
        })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
    });
})();
