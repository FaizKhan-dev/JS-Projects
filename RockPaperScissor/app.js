let comp = 0;
let user = 0;
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice is clicked",userChoice);

    })
    
});
const gencompchoice = ()=>{
    const options = ["Rock","Paper","Sciccors"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
    
}
const game = (userChoice)=>{

}


