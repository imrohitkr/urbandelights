import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Reviews" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Feel free to share your views</h1>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>write your review</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
