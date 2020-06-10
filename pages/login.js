import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";

import Layout from '../components/Layout';

class LoginPage extends React.Component {
  componentDidMount() {
    document.getElementById('__next').classList.add('login-page');
  }
  componentWillUnmount() {
    document.getElementById('__next').classList.remove('login-page');
  }
  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <form className="col-lg-5 col-sm-8 col-md-6 col-xs-12">
            <div className="col-lg-12 logo">
              <img src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png" width="45" alt="" className="d-inline-block align-middle mr-2"/>
              <span className="text-uppercase font-weight-bold">Company</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">အီးမေးလ် လိပ်စာ</label>
              <input type="email" className="form-control" id="email" placeholder="Enter Email" autoComplete="nope"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">လျှို့ဝှက်စကားလုံး </label>
              <div className="input-group">
                <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                <div className="input-group-append">
                  <span className="input-group-text"><img width="20" height="20" src="../password.png"/></span>
                </div>
              </div>
            </div>
            <div className="justify-content-center">
              <button type="button" className="btn btn-green btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
