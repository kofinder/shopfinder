import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

export default () => {
  return (
    <Layout title={ 'Home' }>

      <section className="bg-gray-light section-one">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="summary">
                <p>121 INNOX</p>
                <div className="info-text">
                  Your <b>FINNEST</b> Clothing at your <br/>
                  <b>FINGER-TIPS</b>.
                </div>
                <div className="btn-control">
                  <button type="button" className="btn btn-green">Shop Now</button>
                  <button type="button" className="btn btn-accent">Start Design</button>
                </div>
              </div>
              <img src="./slider.png" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark section-two">
        <div className="container">Home</div>
      </section>

      <section className="bg-white section-three">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="item bg-dark">
                <img src="./fast_service.png" width="45" className="img-fluid"/>
                <div className="summary"> Fast Service </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item bg-dark">
                <img src="./travelling.png" width="60" className="img-fluid"/>
                <div className="summary">Free Delivery</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item bg-dark">
                <img src="./time_and_date.png" width="60" className="img-fluid"/>
                <div className="summary"> 24/7 Availability </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
