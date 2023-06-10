const items= document.querySelectorAll(".item")
      image= document.querySelector(".img")
      

//loop through each element
items.forEach(item=>{
    //when draggable element dragged over a item element
    item.addEventListener("dragover",(e)=>{
        e.preventDefault()
        item.classList.add("hovered")
    })
    //when draggable element leaves item element
    item.addEventListener("dragleave",()=>{
        item.classList.remove("hovered")
    })
    //when draggable element is dropped on a item element
    item.addEventListener("drop",()=>{
        
        item.appendChild(image)
        item.classList.remove("hovered")
    })
    
})