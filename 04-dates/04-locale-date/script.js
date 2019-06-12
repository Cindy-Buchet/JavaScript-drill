/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let day = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    let month = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
    let date = new Date();
    
    let now = day[date.getDay()];
    let nowday = date.getDate();   
    let nowmonth = month[date.getMonth() + 1];   
    let nowyear = date.getFullYear();
    let nowhour = date.getHours();
    let nowmin = date.getMinutes();
    document.getElementById("target").innerHTML = (now + " " + nowday + " " + nowmonth + " " + nowyear + " " + nowhour + "h"+nowmin);

    
})();
