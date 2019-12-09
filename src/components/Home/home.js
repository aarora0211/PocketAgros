import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import homeBackground from './assets/farm.jpeg';

let sectionStyle = {
  backgroundImage: `url(${homeBackground})`
};

class home extends React.Component {
  render() {
    return(
    <div>
    <main id="mainHome">
    <div id="homeImage" style={ sectionStyle }>
    <br /><br /><br /><br /><br />
    <div id="homeContent">
      <h1>FRESH FROM YOUR FARM</h1>
      <p>Organic produce grown on your rental farm by your friendly neighour farmer. <br />
        Freshness guaranteed <br /> An experience you'll never forget!
      </p>
    </div>
    <div id="getStartedButton" aria-live="assertive">
      <Link to={ROUTES.LOGIN}><button type="get-started-button" id="getStarted">GET STARTED</button></Link>
    </div>
  </div>
  </main>
  </div>
);
}

}

export default home;
