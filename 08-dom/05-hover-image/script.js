/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let test = document.querySelector('img');
    let image = test.dataset.hover;
    let nohover = test.src;
    console.log(test.dataset.hover);
    console.log(nohover);

    test.addEventListener("mouseover", function( event ) {
        test.src = image; 
    });
    test.addEventListener("mouseout", function (event){
        test.src = nohover;
    });
})();
