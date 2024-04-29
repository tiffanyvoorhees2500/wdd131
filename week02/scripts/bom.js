const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addNewChapter(){
    let chapterName = input.value;

    if(chapterName.trim() === ""){
        alert("You must enter a book and a chapter. EX: Alma 5");
        
        resetForm();
    }else{
        const item = document.createElement("li");
        const deletbtn = document.createElement("button");

        item.textContent = input.value;

        deletbtn.textContent = "❌";

        item.append(deletbtn);

        list.append(item);

        resetForm();

    }
}

function deleteChapter(e){
    const item = e.target.closest("li");

    item.remove();
    resetForm();
}

function resetForm(){
    input.value = "";
    input.focus();
}

button.addEventListener("click",addNewChapter);
list.addEventListener("click",deleteChapter);