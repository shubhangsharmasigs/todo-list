const addBtn = document.getElementById('add-to-list');
const deleteBtn = document.getElementById('delete-btn');


addBtn.addEventListener('click',()=>{
    console.log("Updating lists...");
    let tit = document.getElementById('input-area-title').value;
    let desc = document.getElementById('description-box').value;

    if(localStorage.getItem('itemsJson')==null){
        itemsArray = [];
        itemsArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsArray));

    }
    else{
        itemsArrayStr = localStorage.getItem('itemsJson');
        itemsArray = JSON.parse(itemsArrayStr);
        itemsArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
    }
});