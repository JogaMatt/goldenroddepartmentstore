import React from 'react';
import Link from 'next/link'
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  console.log(heroBanner.image)
  return (
    <div className='hero-banner-container'>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <p className='beats-solo'>{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
        </div>
        <div>
          <img src={urlFor(heroBanner.image)} alt="" className='hero-banner-image'/>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
        </div>
       
      </div>
    </div>
  )
}

export default HeroBanner