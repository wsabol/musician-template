import React from 'react'
import './AudioPlayer.css'
import AudioPlayer from './AudioPlayer'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: []
    }
    this.players = []
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_API_SERVER+"api/listen.json.php")
    .then(res => res.json())
    .then((audio) => {
      this.setState({ audio });
    },
    (error) => {
      console.error(error)
    })
  }
  audioClick = (e, n) => {
    this.players[n].toggle()
    for ( let i = 0; i < this.players.length; i++ ) {
      if ( i !== n ) {
        this.players[i].stop()
      }
    }
  }
  render() {
    return (
      <section className="section animated fadeIn">
        <div className="hero">
          <div className="hero-body" >
            <div className="container">
              <div className="columns">
                { this.state.audio.map((a, i) =>
                  <div key={i} className="column">
                    <AudioPlayer onClick={(e) => { this.audioClick(e, i) }}
                    ref={(th) => {this.players[i] = th }} src={a.filename} title={a.title} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
