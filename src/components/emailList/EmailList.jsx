import React from 'react';
import './EmailList.css';

const EmailList = () => {
  return (
    <div className='emailList'>
        <div className='emailListWappar'>
          <div className='emailListText'>
            <span className='emailTitle'>Save time, save money!</span>
            <span className='emailSubtitle'>Sign up and we'll send the best deals to you</span>
          </div>
          <div className='emailListContainer'>
            <input className='emailListInput' type='email' placeholder='Your Email'/>
            <button type='button' className='emailListButton'>Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default EmailList;