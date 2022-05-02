// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
function storeSearchterm(term){
    localStorage.setItem("news",term);
    window.location.href = "search.html";
}

export default storeSearchterm;