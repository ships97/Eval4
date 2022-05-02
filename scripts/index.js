// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navba from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navba;

async function news(id){
    event.preventDefault();

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`)
        const data = await res.json();

        console.log(data,id);
        PictureInPictureWindow(data.articles)
        console.log(data.articles)
    }catch(err){
        console.log("err");
    }
}

var appen = document.querySelector("#results")

document.querySelector("#in").addEventListener("click",function(){news("in") });
document.querySelector("#ch").addEventListener("click",function(){news("in") });
document.querySelector("#us").addEventListener("click",function(){news("in") });
document.querySelector("#uk").addEventListener("click",function(){news("in") });
document.querySelector("#nz").addEventListener("click",function(){news("in") });

function printer(data){
    appen.innerHTML = "";
    data.map(function(ele){
        let img = document.createElement("img");
        let title = documnet.createElement("h3");
        let rldate = document.createElement("h4");
        let rating = document.createElement("h4");

        img.src = `${ele.urlToImage}`
        title.innerText = `Title :${ele.title}`

        let cont = document.createElement("div")
        cont.setAttribute("id","news")
        cont.append(img,title);

        appen.append(cont);
    })
}

