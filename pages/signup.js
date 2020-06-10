import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

class SignUpPage extends React.Component {
  componentDidMount() {
    document.getElementById('__next').classList.add('signup-page');
  }
  componentWillUnmount() {
    document.getElementById('__next').classList.remove('signup-page');
  }
  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <form className="col-lg-6 col-sm-8 col-md-6 col-xs-12">
            <div className="col-lg-12 logo">
              <img src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png" width="45" alt="" className="d-inline-block align-middle mr-2"/>
              <span className="text-uppercase font-weight-bold">Company</span>
            </div>

            <div className="form-group">
              <label htmlFor="name">အမည်  *</label>
              <input type="name" className="form-control" id="name" placeholder="Enter Name" autoComplete="nope"/>
            </div>

            <div class="form-row">
              <div className="col">
                <label htmlFor="email">အီးမေးလ် လိပ်စာ  *</label>
                <input type="email" class="form-control" id="email" placeholder="Enter Email" autoComplete="nope"/>
              </div>
              <div className="col">
                <label htmlFor="phone">ဖုန်းနံပါတ်  *</label>
                <input type="phone" class="form-control" id="phone" placeholder="Enter Phone" autoComplete="nope"/>
              </div>
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

            <div className="form-group">
              <label htmlFor="confirmPassword">လျှို့ဝှက်စကားလုံး အတည်ပြုရန်  * </label>
              <div className="input-group">
                <input type="confirmPassword" className="form-control" id="confirmPassword" placeholder="Enter Confirm Password"/>
                <div className="input-group-append">
                  <span className="input-group-text"><img width="20" height="20" src="../password.png"/></span>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div className="col">
                <label htmlFor="email">တိုင်းဒေသကြီး/ပြည်နယ်  *</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="inputState">မြို့နယ်  *</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>


            <div className="form-group">
              <label htmlFor="address">နေရပ်လိပ်စာ အပြည့်အစုံ</label>
              <input type="address" className="form-control" id="address" placeholder="Enter Address" autoComplete="nope"/>
            </div>


            <div className="justify-content-center">
              <button type="button" className="btn btn-accent btn-block">SignUp</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
