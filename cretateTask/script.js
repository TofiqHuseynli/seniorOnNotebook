let createBtn = document.querySelector(".create-btn");
let allBtn = document.querySelector(".all-btn");
let container = document.querySelector(".container");
let input = document.querySelector(".inp");

let array = [];

createBtn.addEventListener('click', function (e) {
    
    if (input.value == "") {
        Swal.fire('Deyer daxil et');
    }
    else {
        
        let object = document.createElement("div");
        object.classList.add("content");
        container.appendChild(object)
        let text = document.createElement("p");
        text.classList.add("content-text");
        text.innerHTML = input.value;
        object.appendChild(text);
        array.push(text.innerText);
        
        
        console.log(array);
        let btnDiv = document.createElement("div");
        btnDiv.classList.add("btn-div")
        object.appendChild(btnDiv)

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        deleteBtn.classList.add("btn", "del-btn");
        btnDiv.appendChild(deleteBtn);



        let editBtn = document.createElement("button");
        editBtn.innerHTML = "EDIT";
        editBtn.classList.add("btn", "edit-btn");
        btnDiv.appendChild(editBtn);

        input.value = "";

        deleteBtn.addEventListener('click', function () {
            object.remove();
            

            
            
            

        });



        editBtn.addEventListener('click', function () {
            text.classList.add("none");
            editBtn.classList.add("none");
            let editInput = document.createElement("input");
            editInput.classList.add("edit-input");
            object.insertBefore(editInput, btnDiv);
            editInput.value = text.innerHTML
            let saveBtn = document.createElement("button");
            saveBtn.innerHTML = "SAVE"
            saveBtn.classList.add("btn", "save-btn")
            btnDiv.appendChild(saveBtn);
            editInput.focus();

            saveBtn.addEventListener('click', function () {
                editInput.classList.add("none");
                text.classList.remove("none");
                text.innerHTML = editInput.value;
                object.insertBefore(text, btnDiv);
                saveBtn.classList.add("none");
                editBtn.classList.remove("none")




               

            })

           





        });

        



        allBtn.addEventListener('click', function () {
           

                object.remove();
                input.value = "";
                array = [];
              
             
            
            
           
        })
     


    }
    


});



function testArray(){
    if(array.length === 0){

        

    }
}






allBtn.addEventListener('click', function () {
           
if(array.length === 0){

    console.log("test")
               

Swal.fire({
    icon: 'error',
    title: 'Silinəcək data yoxdur!',
    
})



}



})



