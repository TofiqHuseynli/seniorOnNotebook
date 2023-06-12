
let input = document.querySelector(".inp");
let container = document.querySelector(".con");
let taskContent = document.querySelector(".task-content");
let addBtn = document.querySelector(".add-bt")

addBtn.addEventListener('click',function(){
    let header = document.createElement("h4");
    header.innerHTML = "Senior.Az"
    taskContent.appendChild(header)

    let task = document.createElement("p");
    task.innerHTML = input.value;
    taskContent.appendChild(task);

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa fa-pen-to-square"></i>`;
    taskContent.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    taskContent.appendChild(deleteBtn);

    
})