import React from 'react'

const links = [{
  href: '#',
  track: 'So many ways',
  artist: 'Joe Blow',
  credit: 'Guitar'
}, {
  href: '#',
  track: '40,000 years',
  artist: 'Big Jazz Man',
  credit: 'Fluglehorn'
}, {
  href: '#',
  track: 'Rocky Mountain Low',
  artist: 'That Guy',
  credit: 'Lead Guitar'
}, {
  href: '#',
  track: 'This Song',
  artist: 'That Guy',
  credit: 'Lead Guitar'
}]

export default props =>
  <section className="section animated fadeIn">
    <div className="hero is-section">
      <div className="hero-body" >
        <div className="container">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                {Object.keys(links[0]).map(h => (h === 'href' ? '' : <th>{h}</th>))}
              </tr>
            </thead>
            <tbody>
              {links.map(lnk =>
                <tr>
                  {Object.keys(links[0]).map(h => {
                    if ( h === 'href' )
                      return ''
                    else if ( h === 'track' )
                      return <td><a href={lnk.href}>{lnk[h]}</a></td>
                    else
                      return <td>{lnk[h]}</td>
                  })}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
