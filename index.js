let searchBar = document.querySelector("#searchBar")
let bookmarkNamer = document.querySelector("#bookmarkNamer")

searchBar.addEventListener("input", (event) =>{
    let searchBarValue = searchBar.value.toLowerCase();
    console.log("this is inputVal", searchBarValue)

})


//instead of bookmark object have bookmark class
//create bookmark class with a render method

//change bookmarks class to use .map


class Bookmark{
    constructor(){
        this.bookmarks = []
    }
    render(){
        const bookmarkList = document.querySelector(".list")
        const listItem = document.createElement("a")
        listItem.textContent = bookmarkNamer.value
        listItem.href = searchBar.value
        bookmarkList.append(listItem)
        }
    // render(){
    //     const bookmarkList = document.querySelector(".list")
    //     bookmarkList.innerHTML = ''
    //     let x = this.bookmarks
    //     for(let bookmark of x){
    //         const listItem = document.createElement("a")
    //         listItem.textContent = bookmarkNamer.value
    //         listItem.href = bookmark
    //         bookmarkList.append(listItem)
    //     }
    // }


    addBookmark(){
        this.bookmarks.push(searchBar.value)
        console.log(this.bookmarks)
    }
}

let b = new Bookmark()

let addBookmark = document.querySelector("button")
addBookmark.addEventListener("click", function(){
    b.addBookmark()
    searchBar.value = ''
    b.render()
})

// function deleteBookmarks(){
    //loop through the array of bookmarks
    //if (bookmarks[i].url == url){
//         bookmarks.splice(i,1);
//     }
// }

class Bookmarks{
    constructor (){
        this.sortedBookmarks =[];
    }
}