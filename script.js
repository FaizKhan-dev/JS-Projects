const btn = document.querySelector(".meme-btn");
const memetitle = document.querySelector(".meme-title");
const memeimg = document.querySelector(".meme-img");
const auth = document.querySelector(".meme-auth");

const updatedet = (url,title,author)=>{
    memeimg.setAttribute("src",url);
    memetitle.innerHTML = title;
    auth.innerHTML = `meme by ${author}`;
}

const generatememe = async()=>{
    try{
    const response = await fetch("https://meme-api.com/gimme/wholesomememes");
    const data = await response.json();
    updatedet(data.url , data.title , data.author);
}
catch (err){
    console.log("fetching error",err);
}
}
btn.addEventListener("click", generatememe);

generatememe();