let containerPosts = document.querySelector("#containerPosts")

let allPosts =localStorage.getItem("allPosts")
localStorage.setItem("allPosts",allPosts)
containerPosts.innerHTML = allPosts
