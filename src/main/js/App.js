import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Row, Col, Grid } from 'react-bootstrap';
import Header from "./nav/Header";
import Page from "./nav/Page";
import GameList from "./Page/GameList";
import Home from "./Page/Home";

class App extends Component {
	render() {
	 const homePage = () => ( <Page title="Welcome" subtitle="to the Game-Share app!"><Home /></Page> );
	 const gamePage = () => ( <Page title="Games" subtitle="List of available games"><GameList /></Page> );
		return (
    <Router>
      <>
        <Header />
        <Grid>
          <Row>
            <Col>
              <Route exact path="/" component={homePage} />
              <Route exact path="/game/list" component={gamePage} />
            </Col>
          </Row>
        </Grid>
      </>
    </Router>
		 )
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)