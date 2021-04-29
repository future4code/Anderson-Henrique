

export const goToLoginPage = (history) => {
    history.push("/login")
}


export const goToSignUpPage = (history) => {
    history.push("/signup")
    console.log("Cha-la, head cha la")
}


export const goToPostsPage = (history) => {
    history.push("/")
}


export const goToDetailedPostPage = (history,id) => {
    console.log('Haha')
    console.log("ID: ",id)
    history.push(`/posts/${id}`)
}