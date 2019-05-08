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

const IMAGES = shuffleArray([
  "//c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "//c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "//c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  "//c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  "//c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "//c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "//c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  "//c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
])

export default props =>
  <section className="section animated fadeIn">
    <div className="hero is-section">
      <div className="hero-body" >
        <div className="container has-text-centered">
          <Gallery images={IMAGES.map(i => { return {src: i, thumbnail: i, thumbnailWidth: 320, thumbnailHeight: 192} })}
            backdropClosesModal={true}
          />
        </div>
      </div>
    </div>
  </section>
