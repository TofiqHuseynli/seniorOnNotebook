
let input = document.querySelector(".inp");
let container = document.querySelector(".con");
let taskContent = document.querySelector(".task-content");
let addBtn = document.querySelector(".add-bt")
let formInput = document.querySelector(".form-control");
let textArea = document.querySelector(".text-area");
let editDiv = document.querySelector(".edit-div")
let bodyDiv = document.querySelector(".body-div")

addBtn.addEventListener('click', function () {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks-div");
    taskContent.appendChild(taskDiv);

    let header = document.createElement("h4");
    header.classList.add("task-header-text")
    header.innerHTML = formInput.value;
    taskDiv.appendChild(header)

    let task = document.createElement("p");
    task.classList.add("task-content-text")
    task.innerHTML = textArea.value;
    taskDiv.appendChild(task);

    let btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btns-div")
    taskDiv.appendChild(btnsDiv);


    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    
    editBtn.innerHTML = `<i class="fa fa-pen-to-square"></i>`;
    btnsDiv.appendChild(editBtn);
    

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    btnsDiv.appendChild(deleteBtn);

    editBtn.addEventListener('click', function(){

        editDiv.style.visibility= "visible"
       
    })

    bodyDiv.addEventListener('click',function(e){
        let target = e.target;
        if(target.classList == "body-div"){
            editDiv.style.visibility= "hidden"
        }
    })


    deleteBtn.addEventListener('click', function(){
        header.filter(function(item){
            return item !== header.innerHTML
        })
    })


})