let allGames = document.getElementsByClassName("game");

let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto"
} ,1300)
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}
let openWorldfilter = document.getElementById("checkbox-openworld")
openWorldfilter.onchange = function(){
    if(openWorldfilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "open world"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "open world"){
                allGames[i].style.display = "none"
            }
        }
    }
}
let herofilter = document.getElementById("checkbox-hero")
herofilter.onchange = function(){
    if(herofilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Hero"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Hero"){
                allGames[i].style.display = "none"
            }
        }
    }
}
let shooterfilter = document.getElementById("checkbox-shooter")
shooterfilter.onchange = function(){
    if(shooterfilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Shooter"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Shooter"){
                allGames[i].style.display = "none"
            }
        }
    }
}