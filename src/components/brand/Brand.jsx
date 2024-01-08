import React from 'react'
import './brand.css'
import {google,slack,atlassian,dropbox,shopify} from './imports'

const images = [{src: google, alt: 'google'}, {src: slack, alt: 'slack'}, {src: atlassian, alt: 'atlassian'}, {src: dropbox, alt: 'dropbox'}, {src: shopify, alt: 'shopify'}];

const Brand = () => {
  return (
    
    <div className="gpt3__brand section__padding">
      {
        images.map(values =>(
          <div key={values.src}>
            <img src={values.src} alt={values.alt} />
          </div>
        ))
      }
    </div>
    
    
  )
}

export default Brand