import React from 'react';
import './PropertyList.css';
import House03 from '../../images/house03.jpg';
import House04 from '../../images/house04.jpg';
import House05 from '../../images/house05.jpg';
import House06 from '../../images/house06.jpg';
import House07 from '../../images/house07.jpg';
const PropertyList = () => {
  return (
    <div className='propertyList'>
        <div className='propertyListItem'>
            <img className='propertyListImage' src={House04}/>
            <div className='propertyListText'>
                <h1>Hotels</h1>
                <h2>250 Hotels</h2>
            </div>
        </div>
        <div className='propertyListItem'>
            <img className='propertyListImage' src={House05}/>
            <div className='propertyListText'>
                <h1>Resorts</h1>
                <h2>1050 Resorts</h2>
            </div>
        </div>
        <div className='propertyListItem'>
            <img className='propertyListImage' src={House06}/>
            <div className='propertyListText'>
                <h1>Apartments</h1>
                <h2>2200 Apartments</h2>
            </div>
        </div>
        <div className='propertyListItem'>
            <img className='propertyListImage' src={House07}/>
            <div className='propertyListText'>
                <h1>Villas</h1>
                <h2>850 Villas</h2>
            </div>
        </div>
        <div className='propertyListItem'>
            <img className='propertyListImage' src={House03}/>
            <div className='propertyListText'>
                <h1>Cabins</h1>
                <h2>681 Cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList;