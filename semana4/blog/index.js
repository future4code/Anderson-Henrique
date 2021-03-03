// // 1.
// let titulo = document.querySelector("#titulo-post")
// let autor = document.querySelector("#autor-post")
// let conteudo = document.querySelector("#conteudo-post")
// let imageLink = document.querySelector("#imagem")
// let section =document.querySelector("#container-de-posts")

// let post ={
//     title : titulo.value,
//     author: autor.value,
//     content : conteudo.value    
// }
let sectionPosts = document.all[20]
function createPost() {   
let titulo = document.querySelector("#titulo-post")
let autor = document.querySelector("#autor-post")
let conteudo = document.querySelector("#conteudo-post")
let imageLink = document.querySelector("#imagem")
let section =document.querySelector("#container-de-posts")
    let post ={
        title : titulo.value,
        author: autor.value,
        content : conteudo.value,       
}
if(post.title===""|| post.author==="" || post.section===""){
    alert("Insira todos os dados necessários(Imagem é opcional)")
}else{
if(imageLink.value!=="" && imageLink.value.includes(".png") || imageLink.value.includes(".jpg")){

    post.image = imageLink.value
    section.innerHTML+= 
    `<div class="postsss">
    <h2> ${post.title}</h2>
    <p>${post.content}</p>
    <h3>Autor: ${post.author}</h3>
    <img src=${post.image}>
    </div>`
}else{


    section.innerHTML+= 
    `<div class="postsss">
    <h2> ${post.title}</h2>
    <p>${post.content}</p>
    <h3>Autor: ${post.author}</h3>
    </div>`
}
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imageLink.value = ""
localStorage.setItem("allPosts",sectionPosts.innerHTML)

event.preventDefault()

}}


    // function pagePosts(e) {
        
    //     let container = document.querySelector("#containerPosts")
    //     container.innerHTML= sectionPosts
    //     // e.preventDefault()
    // }

// localStorage.setItem("allPosts",sectionPosts)