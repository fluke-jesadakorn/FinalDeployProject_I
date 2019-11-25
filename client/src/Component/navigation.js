import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import home from './home'
import graph from './graph'
import control from './control'
import profile from './profile'

var BackgroungNav = styled.div`
  padding: 10px 10px 10px 10px;
  background-color: black;
`

const NavBtn = styled.span`
  
  color: white;
  padding: 10px 20px 10px 20px;
  margin: 20px;
  text-decoration: none;
  display: inline;
  list-style-type: none;
  &:hover {
    background-color: green;
    text-decoration: none;
  }
  &:active {
    background-color: red;
    text-decoration: none;
  }
`

export default class Navigation extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <BackgroungNav>
            <NavBtn><Link to="/">HOME</Link></NavBtn>
            <NavBtn><Link to="/graph">GRAPH</Link></NavBtn>
            <NavBtn><Link to="/control">CONTROL</Link></NavBtn>
            <NavBtn><Link to="/profile">PROFILE</Link></NavBtn>
          </BackgroungNav>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/graph/" component={graph} />
            <Route path="/control/" component={control} />
            <Route path="/profile/" component={profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}