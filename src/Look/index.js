import React from 'react'
import Gallery from 'react-grid-gallery';

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      look: []
    }
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_API_SERVER+"api/look.json.php")
    .then(res => res.json())
    .then((look) => {
      console.log(look)
      this.setState({ look });
    },
    (error) => {
      console.error(error)
    })
  }
  render() {
    const look = shuffleArray(this.state.look);

    return (
      <section className="section animated fadeIn">
        <div className="hero">
          <div className="hero-body" >
            <div className="container has-text-centered">
              <Gallery images={look.map(i => { return {src: i.filename, thumbnail: i.filename, thumbnailWidth: 220*i.aspect, thumbnailHeight: 220} })}
                backdropClosesModal={true}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
