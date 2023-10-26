const ellist = selectelem(".list")
const eltemplate = selectelem(".template").content
const elform = selectelem(".form")
const elforminput = selectelem(".form_input", elform)

let todosArr = []

function renderTodos(arr, list){
    ellist.innerHTML = null
    arr.map(item => {
        let cloneTemplate = eltemplate.cloneNode(true)
        selectelem(".list_item-content", cloneTemplate).textContent = item.content
        ellist.appendChild(cloneTemplate)
    })
    
}


elform.addEventListener("submit", (e) =>{
    e.preventDefault()
    let inputvalue = elforminput.value.trim()

    todosArr.push({
        id: todosArr.length,
        content: inputvalue,
        isCompleted: false
    })

renderTodos(todosArr)
    
    elforminput.value.null
    elforminput.focus()
})