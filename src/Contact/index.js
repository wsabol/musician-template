import React from 'react'
import ContactForm from './ContactForm'

export default props =>
  <section className="section animated fadeIn">
    <div className="hero">
      <div className="hero-body" >
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
