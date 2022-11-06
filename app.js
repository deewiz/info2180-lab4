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
        if (hero_form === ''){
            //do
            console.log("This is 1");
            fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                message.innerHTML = data;
                heroname.innerHTML = "";
                alias.innerHTML = "";
                biography.innerHTML = "";
                //alert(`Superheroes List \n ${data}`);
            })
            .catch(error => console.log('There was an error: ' + error));