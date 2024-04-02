import React from 'react';
import { SubHeading } from '../../components';
import Reviews from '../reviews/Reviews'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Reviews" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Feel free to share your views</h1>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>write your review</button>
    </div>


      <Reviews />
    
  </div>
);

export default FindUs;
