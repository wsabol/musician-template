import React from 'react'
import Burger from '../modules/Burger'

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
      <nav className="navbar is-transparent app-header is-fixed-top">
        <div className="navbar-brand">
          <Burger target="navbar" ref={this.burgerNode} />
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a onClick={this.navClick} className="navbar-item" href="javscript:;" page="home">Home</a>
            <a onClick={this.navClick} className="navbar-item" href="javscript:;" page="about">About</a>
            <a onClick={this.navClick} className="navbar-item" href="javscript:;" page="listen">Listen</a>
            <a onClick={this.navClick} className="navbar-item" href="javscript:;" page="watch">Watch</a>
            <a onClick={this.navClick} className="navbar-item" href="javscript:;" page="look">Look</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-centered">
                <a onClick={this.navClick} className="button is-primary" href="javscript:;" page="contact">
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
