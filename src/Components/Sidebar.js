import React from "react";
import { ListGroup, Nav, Card } from "react-bootstrap";
import { Link, Route, Switch, BrowserRouter as Router  } from "react-router-dom";
import { Home, Transfer, TopUp, Profile } from "../pages";
import './src/style.css'


const Sidebar = (props) => {
    return (
      <>
      <div className={` main `}>
          <div className={` row justify-content-center`}>
          <ListGroup variant="flush" className={`sidebar col-md-2 shadow pt-3 mb-5 bg-white`}>
            <Nav.Link className={`active`}>
            <img className={`ml-1 mr-2`} src={require('./assets/icons/grid.png')} />
            <Link className={`listName home`} to="/">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
            <img className={`ml-1 mr-2`} src={require('./assets/icons/arrow-up.png')} />
              <Link className={`listName`} to="/transfer">Transfer</Link>
            </Nav.Link>
            <Nav.Link>
            <img className={`ml-1 mr-2`} src={require('./assets/icons/plus.png')} />
              <Link className={`listName`} to="/topup">Top Up</Link>
            </Nav.Link>
            <Nav.Link>
            <img className={`ml-1 mr-2`} src={require('./assets/icons/user.png')} />
              <Link className={`listName`} to="/profile">Profile</Link>
            </Nav.Link>
            <Nav.Link className={`logout`}>
            <img className={`mb-2 ml-1 mr-2`} src={require('./assets/icons/log-out.png')} />
              <Link className={`listName`} to="/profile">Logout</Link>
            </Nav.Link>
        </ListGroup>
        {/* <Route exact path="/" render={(props) => <Home {...props} />} /> */}
        <div className={`content col-md-7 pt-3 mb-5  bg-white`}>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route path="/transfer" render={(props) => <Transfer {...props} />} />
              <Route path="/topup" render={(props) => <TopUp {...props} />} />
              {/* <Route path="/profile" render={(props) => <Profile {...props} />} /> */}
            </Switch>
        </div>
        
          </div>
      </div>
        
      </>
    );
  };
  
  export default Sidebar;
  