import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Header = props => (
  <div className="header">
    <div className="container">
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link as="/instock-product" href='/instock-product'>
            <a className="nav-link">Instock Product</a>
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
            <a className="nav-link">Shopping Cart</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  props: PropTypes.object,
};

export default Header;
