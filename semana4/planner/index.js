let button = document.querySelector("button")
let select = document.querySelector("select")
const form = document.querySelector("form")
form.addEventListener("submit", function (evt) {
    let box = select.value
    let message = document.querySelector("input")
    if (message.value === "") {
        alert("Mensagem em branco! Digite novamente sua mensagem!")
    }
    let li = document.createElement("li")
    li.innerText = `- ${message.value}`
    let divDaTask = document.getElementById(box)
    divDaTask.appendChild(li)
    li.classList.add("newLi")
    if (divDaTask.lastChild.innerText === "-") {
        divDaTask.removeChild(li)
    }
let allLis = document.querySelectorAll(".newLi")
console.log(allLis)
    message.value = ""
    evt.preventDefault()
    return allLis
})

let allDivs = document.querySelectorAll("div")
let lis = document.querySelectorAll("li")
// function risco() {
//     lis.style.color = "red"
//     console.log("eita")
// } 
// for (li of allLis) {
//    li.addEventListener("click",risco())
//     li.style.color = "blue"
// li.classList.toggle("line-through")

// }
let removeButton = document.querySelector("#removeAllTasks")
removeButton.addEventListener("click", function eraseAllTasks() {

    for (div of allDivs) {
        if (div.lastChild) {
            for (i = 0; i < div.childElementCount; i++) {
                div.lastChild.remove(lis)
            }
        }
    }
})



