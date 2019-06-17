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
    let json;
    let json2;
    let tab = ["premier","deuxième","troisième","quatrième","cinquième"];
    let y = 0;
    let contenu = "";
    let newli;
    let targ;
    document.getElementById("run").addEventListener ("click", () =>{
        fetch('http://localhost:3000/heroes').then(function(response) {
            return response.json()
        }).then(value => {
            json = JSON.stringify(value);
            json2 = JSON.parse(json);

                for (let i = 0; i <= 4; i++){
                    newli = document.createElement("li");

                    contenu = "Le nom du " + tab[y] + " est " + json2[i].name + ", son alter ego est " + json2[i].alterEgo + " et ses abilities sont: " + json2[i].abilities + "<br/><br/>";
                    newli.innerHTML = contenu;

                    targ = document.getElementById("target");
                    targ.appendChild(newli);
                    console.log(json2[i].name);
                }
            })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
    });
})();
