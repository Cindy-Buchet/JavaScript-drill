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
    let texte;
    let tab = ["premier","deuxième","troisième","quatrième","cinquième"];
    let contenu = "";
    document.getElementById("run").addEventListener ("click", () =>{
        fetch('http://localhost:3000/heroes').then(function(response) {
            return response.json()
        }).then(value => {
            json = JSON.stringify(value);
            json2 = JSON.parse(json);
            texte = document.getElementById("hero-id").value;
                for (let i = 0; i <= 4; i++){
                    if (texte == json2[i].id){

                        contenu = "Le nom du " + tab[i] + " est " + json2[i].name + ", son alter ego est " + json2[i].alterEgo + " et ses abilities sont: " + json2[i].abilities + "<br/><br/>";
                        document.getElementById("target").innerHTML = contenu;
                    }
                }
                if (texte > 5){
                    alert("Tape un chiffre entre 1 et 5");
                }
            })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
    });
})();
