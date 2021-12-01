const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const deleteButton = document.getElementById("deleteButton");
const listContainer = document.getElementById("listContainer");
const allElements = document.getElementsByClassName("listElement");
const parentsOfAllElements = document.getElementsByClassName("parentElement")
const valueOfBox = document.getElementsByClassName("valueOfBox");

let shoppingList = [];

addButton.addEventListener("click", (e) => {
    //adds new box with all the bootstrap classes and layout
    stringAdded = inputField.value;
    shoppingList.push(stringAdded);
    addElement(stringAdded);
    inputField.value = "";

})

function addElement(listIteam){
    
    newDiv = document.createElement("div");
    newDiv.classList = "input-group mb-3 parentElement";
    
    newDiv2 = document.createElement("div");
    newDiv2.classList = "input-group-text";
    
    newInput = document.createElement("input");
    newInput.classList = "form-check-input mt-0 listElement";
    newInput.type = "checkbox";
    newInput.value = "";
    newInput.ariaLabel = "Checkbox for following text input";

    newDiv2.appendChild(newInput);

    newInput2 = document.createElement("input");
    newInput2.type = "text";
    newInput2.classList = "form-control valueOfBox";
    newInput2.ariaLabel = "Text input with checkbox";
    newInput2.value = listIteam;

    
    newDiv.appendChild(newDiv2);
    newDiv.appendChild(newInput2);
    listContainer.appendChild(newDiv);
};

deleteButton.addEventListener("click", (e) => {
    //loops though all the iteams in the list
    for(i = 0; i < allElements.length; i++){
        //checks for iteams cheacked
        if(allElements[i].checked){
            //if iteam was checked, it loops through array and deltes it from the array
            //and makes its div not visable
            for(y = 0; y < shoppingList.length; y++){

                if(valueOfBox[i].value == shoppingList[y]){
                    shoppingList.splice(y, 1);
                    parentsOfAllElements[i].style.display = "none";
                }
            }
        }                
    }

})
