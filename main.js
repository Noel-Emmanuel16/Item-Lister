let form = document.querySelector("#add-form");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");


// Form submit event
form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);
filter.addEventListener("keyup",filterItems);

// Add Item
function addItem(e){
     e.preventDefault();
     // Get input value
     let newItem = document.querySelector("#input").value;

     // Create new li element
     let li = document.createElement("li");
     // Add class
     li.className = "list-group-item";

     // Add text node with input value
     li.appendChild(document.createTextNode(newItem));

     // Create delete button
     let deleteBtn = document.createElement("button");

     // Add classes to delete button
     deleteBtn.className = "btn btn-danger btn-sm float-right delete";

     // Append text node
     deleteBtn.appendChild(document.createTextNode("X"));

     // Add button to li
     li.appendChild(deleteBtn);

     // Add li to list
     itemList.appendChild(li);
}

//  Remove Item
function removeItem(e){
    if(e.target.classList.contains("delete")){
       if(confirm("Are you sure?")){
           let li = e.target.parentElement;
           itemList.removeChild(li);
       }
    }
}

// Filter items
function filterItems(e){
    // convert to lower case
    let text = e.target.value.toLowerCase();
    //Get li
    let items = itemList.querySelectorAll("li");
    items.forEach(item=>{
        let itemName = item.firstChild.textContent;
        
        // Compare item name to search-box text
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}

localStorage.setItem(itemList.children)