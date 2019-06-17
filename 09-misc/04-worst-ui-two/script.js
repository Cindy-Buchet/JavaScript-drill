/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // Séparer le HTML en quatre
    let tar = document.getElementById("target").innerHTML;
    let donnee1 = tar.substr(1,3);
    let donnee2 = tar.substr(4,2);
    let donnee3 = tar.substr(6,2);
    let donnee4 = tar.substr(8,2);

    //Mettre dans un tableau
    let tab = [];
    tab.push(donnee1, donnee2, donnee3, donnee4);
    adaptNumber = value => {
        return (value <= "9" ? `0${value}` : value)
    }
    document.getElementById("target").innerHTML = "+";

    for (let i = 0; i < 4; i++){
        let sp = document.getElementById("target");
        let newspan = document.createElement("span");
        sp.appendChild(newspan);
        newspan.innerHTML = tab[i];
        newspan.id = i;
    }

    // Min et max data du un
    let first = document.getElementById("part-one");
    
    let minfirst = first.dataset.min;
    let maxfirst = first.dataset.max;
    let val1 = parseInt(minfirst);
    
    let vide1 = val1;

        document.getElementById("part-one").addEventListener("click", () => {
            
            vide1 = vide1 + 1;
            first.innerHTML = vide1;
            document.getElementById("0").innerHTML = vide1;

            if (vide1 == maxfirst){
                vide1 = val1 -1;
            }   
        }); 
    
    
   

    let second = document.getElementById("part-two");
    let minsecond = second.dataset.min;
    let maxsecond = second.dataset.max;
    let val2 = parseInt(minsecond);

    let vide2 = val2;
    

    document.getElementById("part-two").addEventListener("click", () => {
            vide2 = vide2 + 1;
            second.innerHTML = adaptNumber(vide2);
            document.getElementById("1").innerHTML = adaptNumber(vide2);

            if (vide2 == maxsecond){
                vide2 = val2 -1;
            }  
            
    });


    let third = document.getElementById("part-three");
    let val3 = parseInt(minsecond);

    let vide3 = val3;

    document.getElementById("part-three").addEventListener("click", () => {
        vide3 = vide3 + 1;
        third.innerHTML = adaptNumber(vide3);
        document.getElementById("2").innerHTML = adaptNumber(vide3);

        if (vide3 == maxsecond){
            vide3 = val3 -1;
        } 
    });

    let fourth = document.getElementById("part-four");
    let val4 = parseInt(minsecond);

    let vide4 = val4;

    document.getElementById("part-four").addEventListener("click", () => {
        vide4 = vide4 + 1;
        fourth.innerHTML = adaptNumber(vide4);
        document.getElementById("3").innerHTML = adaptNumber(vide4);

        if (vide4 == maxsecond){
            vide4 = val4 -1;
        }   
    });
    
   

})();
