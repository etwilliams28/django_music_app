import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Room from './Room';




export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path='/'> This is the home page</Route>
                <Route path="/join" component={RoomJoinPage} />
                <Route path="/create" component={CreateRoomPage} />
                <Route path='/room/:roomCode' component={Room} />
            </Switch>
        </Router>
        );
        
    }
}
