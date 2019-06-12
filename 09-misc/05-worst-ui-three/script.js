/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
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

    document.getElementById("target").innerHTML = "+";

// Boucler pour faire des spans
    for (let i = 0; i < 4; i++){
        let sp = document.getElementById("target");
        let newspan = document.createElement("span");
        sp.appendChild(newspan);
        newspan.innerHTML = tab[i];
        newspan.id = i;
    }

// Initialisation manchot bouton 1
    let node = document.getElementById("part-one");
    let nodemin = node.dataset.min;
    let nodemax = node.dataset.max;
    let n = parseInt(nodemax); // Final
    let cpt = parseInt(nodemin); // début
    let duree = 10; // Durée en sec
    let delta = Math.ceil((duree * 5000) / n); 
    let test1;
    let test2;

// Fonction démarrer bouton 1
    function countdown(){
        node.value = ++cpt;
        if ( cpt < n){
            test1 = setTimeout(countdown, delta);
        } 
        if ( cpt == n) {
            cpt = parseInt(nodemin);
            countdown();
        }
    }

// Fonction stop bouton 1
    function myStopFunction() {
        clearTimeout(test1);
    }

// Bouton un
    document.getElementById("fix-part-one").addEventListener("click", () => {
        
        let fix1 = document.getElementById("fix-part-one");
        
        myStopFunction();
        let do1 = document.getElementById("part-one").value;
        document.getElementById("0").innerHTML = do1;
        fix1.innerHTML = "Start";    
        
        
        
        if (myStopFunction()){
            countdown();
            fix1.innerHTML = "Stop";
        }
    });
    
// Initialisation manchot bouton 2,3,4      
    let node2 = document.getElementById("part-two");
    let node3 = document.getElementById("part-three");
    let node4 = document.getElementById("part-four");
    let node2min = node2.dataset.min;
    let node2max = node2.dataset.max;
    let n2 = parseInt(node2max); // Final
    let cpt2 = parseInt(node2min); // début

// Fonction démarrer bouton 2,3,4    
    function countdown2(){
        node2.value = ++cpt2;
        node3.value = ++cpt2;
        node4.value = ++cpt2;
        if ( cpt2 < n2){
            test2 = setTimeout(countdown2, delta);
        } 
        if ( cpt2 == n2) {
            cpt2 = parseInt(node2min);
            countdown2();
        }
    }


    
// Fonction stop bouton 2,3,4
function myStopFunction2() {
    clearTimeout(test2);
}


// Bouton deux
    document.getElementById("fix-part-two").addEventListener("click", () => {
        
        let fix2 = document.getElementById("fix-part-two");
        
        myStopFunction2();
        let do2 = document.getElementById("part-two").value;
        document.getElementById("1").innerHTML = do2;
        fix2.innerHTML = "Start";    
       
    });

// Bouton trois
    document.getElementById("fix-part-three").addEventListener("click", () => {
        
        let fix3 = document.getElementById("fix-part-three");
        
        myStopFunction2();
        let do3 = document.getElementById("part-three").value;
        document.getElementById("2").innerHTML = do3;
        fix3.innerHTML = "Start";       
        
    });

// Bouton quatre
    document.getElementById("fix-part-four").addEventListener("click", () => {
        
        let fix4 = document.getElementById("fix-part-four");
        
        myStopFunction2();
        let do4 = document.getElementById("part-four").value;
        document.getElementById("3").innerHTML = do4;
        fix4.innerHTML = "Start";    
        
        
    });

// Lancer les setTimeout
    setTimeout(countdown, delta);
    setTimeout(countdown2, delta);
})();
