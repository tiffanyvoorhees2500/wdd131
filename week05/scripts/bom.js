/* -------------------------- */
/*     Variables     */
/* -------------------------- */
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChaptersList() || [];

/* -------------------------- */
/*     Run on load     */
/* -------------------------- */
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

/* -------------------------- */
/*     Functions     */
/* -------------------------- */
function displayList(item){
    const li = document.createElement("li");
    const deletbtn = document.createElement("button");

    li.textContent = item;

    deletbtn.textContent = "❌";

    li.append(deletbtn);

    list.append(li);

    resetForm();
}

function addNewChapter(){
    let chapterName

    if(input.value.trim() === ""){
        alert("You must enter a book and a chapter. EX: Alma 5");
        
        resetForm();
    }else{
        chapterName = input.value;

        console.log(input.value);
        displayList(chapterName);
        console.log(chaptersArray);
        chaptersArray.push(chapterName);
        console.log(chaptersArray);

        setChaptersList();

        resetForm();
    }
}

function deleteChapter(e){
    const item = e.target.closest("li");
    const chapterName = item.textContent.slice(0, item.textContent.length - 1);

    chaptersArray = chaptersArray.filter((chapter) => chapter !== chapterName);

    setChaptersList();
}

function getChaptersList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function setChaptersList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function resetForm(){
    input.value = "";
    input.focus();
}

/* -------------------------- */
/*     Event Listeners     */
/* -------------------------- */
button.addEventListener("click",addNewChapter);
list.addEventListener("click",deleteChapter);