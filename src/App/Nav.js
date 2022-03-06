import React from 'react'
import Burger from './Burger'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.burgerNode = React.createRef()
    this.navClick = (e) => {
      this.burgerNode.current.setState({active: false})
      props.navClick(e)
    }
  }
  render() {
    return (
      <nav className="navbar is-transparent app-header">
        <div className="navbar-brand">
          <Burger target="navbar" ref={this.burgerNode} />
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a onClick={this.navClick} className="navbar-item" href="#home">Home</a>
            <a onClick={this.navClick} className="navbar-item" href="#about">About</a>
            <a onClick={this.navClick} className="navbar-item" href="#listen">Listen</a>
            <a onClick={this.navClick} className="navbar-item" href="#watch">Watch</a>
            <a onClick={this.navClick} className="navbar-item" href="#look">Look</a>
            {/*<a onClick={this.navClick} className="navbar-item" href="#gear">Gear</a>*/}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-centered">
                <a onClick={this.navClick} className="button is-link" href="#contact">
                  <strong>contact</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
