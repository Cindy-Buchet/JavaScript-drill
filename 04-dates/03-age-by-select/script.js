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
    
    let date = new Date();
        
    let nowday = date.getDate();   
    let nowmonth = date.getMonth() + 1;   
    let nowyear = date.getFullYear();
    console.log(nowday + " " + nowmonth + " " + nowyear);

    document.getElementById("run").addEventListener("click", () => {
        let dateday = document.getElementById("dob-day").value ;
        let datemonth = document.getElementById("dob-month").value ;
        let dateyear = document.getElementById("dob-year").value ;

        let anneeactuel = nowyear - dateyear;
        let moins = anneeactuel - 1;
        
        if (datemonth == nowmonth && dateday == nowday){
            alert("Bon anniversaire! Tu as "+ anneeactuel+ " ans aujourd'hui.");
        } else if (datemonth == nowmonth && dateday <= nowday){
            alert("Tu as "+ anneeactuel + " ans");
        }
        
        else if (datemonth < nowmonth){
            alert("Tu as "+ anneeactuel + " ans");
        }
        else {
            alert("Tu as "+ moins + " ans");
        }
    });

})();
