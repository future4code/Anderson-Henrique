import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailedPostPage from '../pages/DetailedPostPage/DetailedPostPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostsPage from '../pages/PostsPage/PostsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'





const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/posts/:id">
                    <DetailedPostPage />
                </Route>
                <Route exact path="/">
                    <PostsPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <Route >
                    <div>Error Page</div>
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router