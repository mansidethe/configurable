import React from 'react';
import config from './../../util/config.json';
import "./Home.css"

const FOOTER_NOTE = "Developed by Manuu"

function Home(){
    return(
        <div className='container' style={{ backgroundColor: config.theme.accentColor }}>
        <h1 className='text-center md-5' style={{ color: config.theme.primaryColor }}>{config.title}</h1>
        <p className='text-centers'>{config.description}</p>
  
        <h1 className='text-cent'style={{color: config.theme.primaryColor}}>Services</h1>
        
        <div style={{display: 'flex', flexDirection:config.serviceCardDirection}}>
        {
          config.services.map((serviceData, index) => {
            const { title, description, price } = serviceData
            return (
              <div className='card m-3' key={index} style={{maxWidth:config.serviceCardDirection==="row justify-content-around " }}>
                <div className='card-body'>
                  <h3 className='card-title' style={{color: config.theme.secondaryColor}}>{title}</h3>
                  <p className='card-text'>{description}</p>
                  <p className='card-text'>Price: {price}</p>
                </div>
              </div>
            )
          })
        }
      </div>
     <div>
      <h2 className='text-cent'>{FOOTER_NOTE}</h2>
     </div>
      </div>
  
  
  
    )
  }

export default Home 





