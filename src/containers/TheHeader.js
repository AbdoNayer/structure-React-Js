import React from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';


const TheHeader = (props) => {
  return (
    <div className={''}>
          <h1>Header</h1>
          <Router>
            <Link className="color" to='/home'>home</Link>
            <Link className="color" to='/about'>About</Link>
            <Link className="color" to='/profile'>Profile</Link>
          </Router>
    </div>
  );
};

export default TheHeader;
