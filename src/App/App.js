import React from 'react';
import 'bulma/css/bulma.css';
import './animate.css';
import './App.css';

import Nav from './Nav'
import Home from '../Home'
import About from '../About'
import Listen from '../Listen'
import Watch from '../Watch'
import Look from '../Look'
import Contact from '../Contact'
import Gear from '../Gear'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyPage: window.location.hash.substr(1) || 'home'
    }
  }
  navClick = (e) => {
    this.setState({
      bodyPage: e.currentTarget.getAttribute('href').substr(1)
    })
  }
  render() {
    let bodyPage = this.state.bodyPage;
    return (
      <div className={"app-content"+(bodyPage === 'home' ? '' : ' overlay')} >
        <Nav navClick={this.navClick} />
        <div className="app-body" id="view">
          {{
            home: <Home />,
            about: <About />,
            listen: <Listen />,
            watch: <Watch />,
            look: <Look />,
            contact: <Contact />,
            // gear: <Gear />
          }[bodyPage]}
        </div>
      </div>
    );
  }
}

export default App;
