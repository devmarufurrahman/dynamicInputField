const addBtn = document.querySelector(".addBtn");

const input = document.querySelector(".inputGroup");


const saveBtn =document.querySelector(".saveBtn")


// remove input fn
function removeInput(){
    this.parentElement.remove();
}



function addInput(nameF){

    // input field create
    const name = document.createElement("input");
    name.type = "text";
    name.name = "name"+nameF;
    name.placeholder = "Enter your name "


    // delete btn create

    const btn = document.createElement("a");
    btn.className = "delete";
    btn.href = "#";
    btn.innerHTML = "&times;";

    // btn onclick
    btn.addEventListener("click", removeInput);



    // div create 

    const flex = document.createElement("div");
    flex.className = "flex";


    // flied append in input group

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(btn);



}





// addBtn.addEventListener("click", addInput);


saveBtn.addEventListener("click", (e)=>{
    const inputField = document.querySelector(".inputField").value;
    console.log(inputField);
    

    for(let i = 0; i < inputField; i++){
        addInput(i)
    }
})
