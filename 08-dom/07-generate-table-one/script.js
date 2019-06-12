/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let bal = document.getElementById("target");
    let tab = document.createElement("table");
    bal.appendChild(tab);

    
    
    for (let i=0; i <= 9 ; i++) { 
        let tab_tr = document.createElement("tr");
        let tab_td = document.createElement("td");
        tab.appendChild(tab_tr);
        tab_tr.appendChild(tab_td);
    }
         
})();
