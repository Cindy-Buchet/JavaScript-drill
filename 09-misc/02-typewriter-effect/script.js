/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => { 
    let doc = document.getElementById("target");
    let phrase = "Je vais apparaitre peu à peu";
    doc.innerHTML = "";
    var newtab = phrase.split("");

    let i = 0;
    let text = ''; 
    let len = phrase.length;


    function Apparition(){
        text += newtab[i];
        doc.innerHTML = text;
        i++;
        
        if (i < len){
            let random = Math.floor(Math.random() * Math.floor(600));
            setTimeout(Apparition, random);
        }
        
    }
    
    setTimeout(function(){
        Apparition();
    }, 300)



})();
