/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    var jsonStr = [{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}];
    
    jsonStr.push({"teamId":"4","status":"pending"});
    

    let nom;
    let alter;
    let pouvoirs;
    let json;
    let json2;
    document.getElementById("run").addEventListener ("click", () =>{
        fetch('http://localhost:3000/heroes').then(function(response) {
            return response.json()
        }).then(value => {
            
            json = JSON.stringify(value);
            console.log(json);
            json2 = JSON.parse(json);
            console.log(value);
            
            nom = document.getElementById("hero-name").value;
            alter = document.getElementById("hero-alter-ego").value;
            pouvoirs = document.getElementById("hero-powers").value;
            console.log(nom+ " " + alter + " " + pouvoirs);
        })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
    });
})();
