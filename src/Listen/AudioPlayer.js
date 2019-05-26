import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.fadeDuration = 500
    this.src = props.src
    this.title = props.title
    this.onClick = props.onClick
    this.state = {
      playback: false
    }
    this.audio = React.createRef()
  }
  toggle() {
    if ( this.state.playback ) this.stop()
    else this.playback()
  }
  playback() {
    this.audio.current.play()
    this.setState({playback: true})
  }
  stop() {
    this.audio.current.pause()
    this.setState({playback: false})
  }
  render() {
    return (
      <div onClick={this.onClick} className={"audio-player js-audio-player"+(this.state.playback ? ' is-playing' : '')}>
        <button className="audio-player__control js-control">
          <div className="audio-player__control-icon"></div>
        </button>
        <h4 className="audio-player__title">{this.title}</h4>
        <audio ref={this.audio} preload="auto" onEnded={e => this.stop()} >
          <source src={this.src} />
        </audio>
        <img className="audio-player__cover" src="//picsum.photos/id/39/300?blur=4" alt="img" />
        <img className="audio-player__animation" src="//media.giphy.com/media/4BHJ1gQrfQNyg/giphy.gif" alt="gif" />
      </div>
    );
  }
}
