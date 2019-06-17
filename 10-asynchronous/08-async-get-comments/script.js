/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    /*
   async function fonctionAsychrone(){
        window.lib.getPosts().then((value) => {
                console.log(value)
            })  
    } 
    async function fonctionAsy(){
        const test = await fonctionAsychrone();
        return test;
    }
    document.getElementById("run").addEventListener("click", () =>{
       fonctionAsy();
        
    })
    */
    async function fonctionAsychrone(){
        window.lib.getPersons().then((array)  => {
            array.forEach(element => {
                window.lib.getComments(element.id).then((comments) => {
                    element["comments"] = comments;
                }) 
            })
        console.log(array);
        }) 
    }
    async function fonctionAsy(){
        const test = await fonctionAsychrone();
        return test;
    }
    
    document.getElementById("run").addEventListener("click", () =>{
      fonctionAsy();                
   })
   
})();
