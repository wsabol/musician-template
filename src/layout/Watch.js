import React from 'react'

const youtubeIds = [
  'k3UisJPtdUk',
  'Wp0Sd_z0Lxg',
  'sQnoZUR6fvY'
]

export default props =>
  <section className="section animated fadeIn">
    <div className="hero is-section">
      <div className="hero-body" >
        <div className="container has-text-centered">
          {youtubeIds.map(id =>
            <div id="watch-frame">
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
