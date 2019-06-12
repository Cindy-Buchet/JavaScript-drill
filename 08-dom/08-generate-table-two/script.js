/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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

    let numb = 1;
    
    for (let i=1; i <= 10 ; i++) { 
        let tab_tr = document.createElement("tr");
        let tab_td = document.createElement("td");
        tab.appendChild(tab_tr);
        tab_tr.appendChild(tab_td);
        numb = i * i;
        let calc = i + "*" + i + " = " + numb 
        tab_td.textContent = calc;
    }
      
})();
