import React from 'react';
import House03 from '../../images/house03.jpg';
import House05 from '../../images/house05.jpg';
import House06 from '../../images/house06.jpg';
import House07 from '../../images/house07.jpg';
import './FeaturesProperties.css';
const FeaturesProperties = () => {
  return (
    <div className='featuresProperties'>
        <div className='featuresPropertiesItem'>
            <img className='featuresPropertisImage' src={House07}/>
            <span className='featuresPropertisTitle'>Lorem ipsum dolor sit amet.</span>
            <span className='featuresPropertisLocation'>Phonix</span>
            <span className='featuresPropertisPrice'>Starting form 800$</span>
            <div className='featuresPropertiesRating'>
                <button className='rating'>9.8</button>
                <h3>Wonderfull</h3>
            </div>
        </div>
        <div className='featuresPropertiesItem'>
            <img className='featuresPropertisImage' src={House03}/>
            <span className='featuresPropertisTitle'>Lorem ipsum dolor sit amet.</span>
            <span className='featuresPropertisLocation'>Phonix</span>
            <span className='featuresPropertisPrice'>Starting form 500$</span>
            <div className='featuresPropertiesRating'>
                <button className='rating'>9.8</button>
                <h3>Wonderfull</h3>
            </div>
        </div>
        <div className='featuresPropertiesItem'>
            <img className='featuresPropertisImage' src={House05}/>
            <span className='featuresPropertisTitle'>Lorem ipsum dolor sit amet.</span>
            <span className='featuresPropertisLocation'>Phonix</span>
            <span className='featuresPropertisPrice'>Starting form 300$</span>
            <div className='featuresPropertiesRating'>
                <button className='rating'>9.8</button>
                <h3>Wonderfull</h3>
            </div>
        </div>
        <div className='featuresPropertiesItem'>
            <img className='featuresPropertisImage' src={House06}/>
            <span className='featuresPropertisTitle'>Lorem ipsum dolor sit amet.</span>
            <span className='featuresPropertisLocation'>Phonix</span>
            <span className='featuresPropertisPrice'>Starting form 150$</span>
            <div className='featuresPropertiesRating'>
                <button className='rating'>9.8</button>
                <h3>Wonderfull</h3>
            </div>
        </div>
    </div>
  )
}

export default FeaturesProperties;