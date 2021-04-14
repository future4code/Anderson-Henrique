
import React from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import AdminHomePage from '../pages/AdminHomePage';
import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import TripsDetailPage from '../pages/TripDetailsPage'
import CreateTripPage from '../pages/CreateTripPage'


const Router = () => {


return (

<BrowserRouter>
        <Switch>
          <Route exact path="/">
              <HomePage/>
          </Route>
          
          <Route exact path="/trips/list">
          <ListTripsPage/>
          </Route>

          <Route exact path="/trips/application">
              <ApplicationFormPage/>
          </Route>

          <Route exact path="/login">
              <LoginPage/>
          </Route>

          <Route exact path="/admin/trips/list">
          <AdminHomePage/>
          </Route>

          <Route exact path="/admin/trips/create">
          <CreateTripPage/>
          </Route>

          <Route exact path="/admin/trips/:id">
          <TripsDetailPage
          name={"chakalaka"}
          />
          </Route>

          <Route >
            <p>Page not found!</p>
          </Route>
        </Switch>
      </BrowserRouter>
)

}

export default Router