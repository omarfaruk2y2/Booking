import React from 'react';
import FooterList from '../../components/footerList/FooterList';
import EmailList from '../../components/emailList/EmailList';
import Featured from '../../components/featured/Featured';
import FeaturesProperties from '../../components/featuresProperties/FeaturesProperties';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './Home.css';

const Home = () => {
  return (
    <div> 
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='headingText'>Browse property type</h1>
        <PropertyList/>
        <h1 className='headingText'>Homes guests love</h1>
        <FeaturesProperties/>
      </div>
      <EmailList/>
      <FooterList />
    </div>
  )
}

export default Home;