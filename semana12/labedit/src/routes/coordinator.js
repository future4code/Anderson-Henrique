

export const goToLoginPage = (history) => {
    history.push("/login")
}


export const goToSignUpPage = (history) => {
    history.push("/signup")
}


export const goToPostsPage = (history) => {
    history.push("/")
}


export const goToDetailedPostPage = (history,id) => {
    history.push(`/posts/${id}`)
}