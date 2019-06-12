/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let test = document.getElementById("source");
    let image = test.dataset.image;
    console.log(test.dataset.image);
    let newbalise = document.createElement("img");
    let ajout = document.querySelector("figure");
    ajout.appendChild(newbalise);
    newbalise.src = image;
    test.remove();
})();
