/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let ladate=new Date()
    document.write(ladate.getHours()+":"+ladate.getMinutes())
    
    let h = ladate.getHours();

        if (h<10) {
            h = "0" + h
        }

    let m = ladate.getMinutes();

        if (m<10) {
            m = "0" + m
        }
    

    let targ = document.getElementById("target");
    console.log(h+"h"+m);

        if (h == 17 && m >= 30){
            targ.innerHTML = "Bonsoir";
        } else if (h >= 18) {
            targ.innerHTML = "Bonsoir";
        } else {
            targ.innerHTML = "Bonjour";
        }
})();
