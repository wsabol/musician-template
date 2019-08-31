import React from 'react'

const youtubeIds = [
  'EItXK1XFibY?start=260',
  '_4S9rCy7Jgs',
  'kYuC8FYIA7g',
  'TK_oxASgW7c',
  'OWxQI_Qvq3o'
]

export default props =>
  <section className="section animated fadeIn">
    <div className="hero">
      <div className="hero-body" >
        <div className="container has-text-centered">
          {youtubeIds.map((id, i) =>
            <div id="watch-frame" key={i} >
              <div className="frame-outer">
                <div className="frame-inner">
                  <iframe src={"//www.youtube.com/embed/"+id} title={id}
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
