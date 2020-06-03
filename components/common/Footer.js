import React from 'react';
import PropTypes from 'prop-types';
import EshopGoogleMap from "./EshopGoogleMap"

const Footer = props => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">09428310392</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">contact@ecoshop.com</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">www.ecoshop.com.mm</a></li>
            <li><a href="http://scanfcode.com/category/java-programming-language/">196,50th Street, Pazundaung Township, Yangon</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-4">
            <div className="mymap">
              <EshopGoogleMap isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `200px` }} />}
              mapElement={<div style={{ height: `100%` }} />}/>
            </div>
        </div>

        <div className="col-xs-6 col-md-4">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/about/">Home</a></li>
            <li><a href="http://scanfcode.com/contact/">Instock Item</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Customize Design</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">Account</a></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by
            <a href="https://finderbar.com">finderbar</a>.
          </p>
        </div>
      </div>
    </div>
  </footer>
);



Footer.propTypes = {
  props: PropTypes.object,
};

export default Footer;
