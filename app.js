window.onload = mystarter;
function mystarter(){
    let searchbtn = document.getElementById('btn');
    var mynote;
    searchbtn.addEventListener('click', async function(element) {
        element.preventDefault();
        var hero_form = document.getElementById("superhero").value;
        var heroname = document.getElementsByClassName("heroname")[0]; 
        var alias = document.getElementsByClassName("alias")[0]; 
        var biography = document.getElementsByClassName("biography")[0];  
        var message = document.getElementsByClassName("message")[0];

        console.log(typeof(heroname));
        console.log(typeof(alias));
        console.log(typeof(biography));
