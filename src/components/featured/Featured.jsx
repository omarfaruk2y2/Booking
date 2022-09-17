import React from 'react'
import House01 from '../../images/house01.jpg';
import House02 from '../../images/house02.jpg';
import House03 from '../../images/house03.jpg';
import House04 from '../../images/house04.jpg';
import './Featured.css';
const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredContainer'>
            <div className='featuredItem'>
                <img className='featureImage' src={House01}/>
                <div className='featureText'>
                <h1>Dublin</h1>
                <h2>150 Dublin USA</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className='featureImage' src={House02}/>
                <div className='featureText'>
                <h1>Miami</h1>
                <h2>250 Miami USA</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className='featureImage' src={House03}/>
                <div className='featureText'>
                <h1>Austria</h1>
                <h2>50 Austria USA</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured;