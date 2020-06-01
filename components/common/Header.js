import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Header = props => (
  <div className="header">
    <div className="container">
      <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link as="/" href='/'>
            <a className="navbar-brand">
              <img src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png" width="45" alt="" className="d-inline-block align-middle mr-2"/>
              <span className="text-uppercase font-weight-bold">Company</span>
            </a>
          </Link>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link as="/instock-product" href='/instock-product'>
                  <a href="#" class="nav-link">Instock Product <span className="sr-only">(current)</span></a>
                </Link>
              </li>
              <li className="nav-item">
                <Link as="/customize-product" href='/customize-product'>
                  <a className="nav-link">Customize Product</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link as="/account" href='/account'>
                  <a className="nav-link">Account</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link as="/shopping-cart" href='/shopping-cart'>
                  <a className="nav-link">
                    <img src={require("../../assets/images/shopping-cart.png")}/>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  props: PropTypes.object,
};

export default Header;
