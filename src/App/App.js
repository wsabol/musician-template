import React from 'react';
import 'bulma/css/bulma.css';
import './animate.css';
import './App.css';

import { Nav, Home, About, Listen, Watch, Look, Contact } from '../layout'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyPage: 'home'
    }
  }
  navClick = (e) => {
    this.setState({
      bodyPage: e.currentTarget.getAttribute('page')
    })
  }
  render() {
    let bodyPage = this.state.bodyPage;
    return (
      <div className="app" id="app">
        <div className="app-content animated fadeIn" id="content" role="main">
          <Nav navClick={this.navClick} />
          <div className={"app-body"+(bodyPage === 'home' ? '' : ' overlay')} id="view">
            {{
              home: <Home />,
              about: <About />,
              listen: <Listen />,
              watch: <Watch />,
              look: <Look />,
              contact: <Contact />
            }[bodyPage]}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
