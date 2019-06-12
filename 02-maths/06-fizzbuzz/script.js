/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    for (let i = 0; i < 100; i++){
        numb = i + 1;
        let fizz = i % 3;
        let buzz = i % 5;
        if (fizz == 0 & buzz == 0) {
            console.log(i + " FizzBuzz");
        } else if (fizz == 0) {
            console.log(i + " Buzz");
        } else if (buzz == 0){
            console.log(i + " Fizz");
        }
        else {
            console.log(i)
        }
       
    }

})();
