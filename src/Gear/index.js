import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gear: []
    }
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_API_SERVER+"api/gear.json.php")
    .then(res => res.json())
    .then((gear) => {
      this.setState({ gear });
    },
    (error) => {
      console.error(error)
    })
  }
  render() {
    const gear = this.state.gear;

    return (
      <section className="section animated fadeIn">
        <div className="hero">
          <div className="hero-body" >
            <div className="container">
              { gear === null ? 'Loading...' :
                <div className="columns is-multiline" >
                  {gear.map((g, i) =>
                    <div className="column is-3" key={i} >
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img className="cover" src={'/assets/gear/'+g.filename} alt={g.title} />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <strong>{g.title}</strong><br />
                            {g.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
