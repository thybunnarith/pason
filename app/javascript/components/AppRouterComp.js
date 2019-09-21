import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePageComp from './HomePageComp';
import AboutPage from './AboutPageComp';

class AppRouterComp extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home/">Home Page</Link>
              </li>
              <li>
                <Link to="/about/">About Page</Link>
              </li>
            </ul>
          </nav>

          <Route path="/home/" component={HomePageComp} />
          <Route path="/about/" component={AboutPage} />
        </div>
      </Router>

    )
  }
}

export default AppRouterComp