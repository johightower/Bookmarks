let searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("input", (event) =>{
    let searchBarValue = searchBar.value.toLowerCase();
    console.log("this is inputVal", searchBarValue)

})

class Bookmarks{
    constructor(bookmark){
        this.bookmark = bookmark;
    }
    render(){
        const bookmarkList = document.querySelector(".list")
        const listItem = document.createElement("a")
        listItem.textContent = searchBar.value
        listItem.href = searchBar.value
        bookmarkList.append(listItem)
    }
}


let b = new Bookmarks(searchBar)

let addBookmark = document.querySelector("button")
addBookmark.addEventListener("click", function(){
    b.render()
})

searchBookmark.addEventListener("input", (event) =>{
    

})