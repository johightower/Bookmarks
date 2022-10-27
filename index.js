let searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("input", (event) =>{
    let searchBarValue = searchBar.value.toLowerCase();
    console.log("this is inputVal", searchBarValue)

})


let searchBookmarks = document.querySelector("#searchBookmark")

function filterBookmarks(searchBookmarkInput){
    searchBookmarkInput = searchBar.value.includes(searchBookmarks.value)
    return searchBookmarkInput
}

searchBookmarks.addEventListener("input", (event) =>{
    let searchBookmarkValue = searchBookmarks.value.toLowerCase();
    console.log("this is inputVal", searchBookmarkValue)
    
})



class Bookmarks{
    constructor(){
        this.bookmarks = []
    }
    render(){
        const bookmarkList = document.querySelector(".list")
        bookmarkList.innerHTML = ''
        let x = this.bookmarks
        x.filter(filterBookmarks)
        for(let bookmark of x){
            const listItem = document.createElement("a")
            listItem.textContent = bookmark
            listItem.href = bookmark
            bookmarkList.append(listItem)
        }
    }

    addBookmark(){
        this.bookmarks.push(searchBar.value)
        console.log(this.bookmarks)
    }
}

let b = new Bookmarks()

let addBookmark = document.querySelector("button")
addBookmark.addEventListener("click", function(){
    b.addBookmark()
    searchBar.value = ''
    b.render()
})