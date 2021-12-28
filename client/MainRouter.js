import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewMedia from './media/NewMedia'
import PlayMedia from './media/PlayMedia'
import EditMedia from './media/EditMedia'
function find_max(nums) {
2 let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
3 for (let num of nums) {
4 if (num > max_num) {
5 // (Fill in the missing line here)
6 }
7 }
8 return max_num;
9 }
const MainRouter = ({data}) => {
  return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>

        <PrivateRoute path="/media/new" component={NewMedia}/>
        <PrivateRoute path="/media/edit/:mediaId" component={EditMedia}/>
        <Route path="/media/:mediaId" render={(props) => (
            <PlayMedia {...props} data={data} />
        )} />
      </Switch>
    </div>)
}

export default MainRouter
