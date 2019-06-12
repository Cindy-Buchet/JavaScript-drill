/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let pixels = ['20px','40px','60px','80px','60px', '40px'];

    let doc = document.querySelector("p#target");
    doc.innerHTML = "";
    let phrase = "Je suis une longue vague";
    
    let i = 0; 
    function Iteration(){
    
        for (let y in phrase){
            let test = document.createElement("span");
            let lettre = phrase.charAt(y);
            test.innerHTML = lettre;
            doc.appendChild(test);

            if (lettre === " "){
                i = i - 1;
            }

            test.style.fontSize = pixels[i];
            
            i + 1;
            
            if (i < pixels.length -1){
                i++;
            } else {
                i = 0;
            }
        }

    }
    Iteration();

})();
