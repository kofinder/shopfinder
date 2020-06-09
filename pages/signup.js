import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

class SignUpPage extends React.Component {
  render() {
    return (
      <Layout title={ 'Account' }>
        <section className="section-account">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="alert alert-warning" role="alert">
                This is a warning alert—check it out!
              </div>
              <div className="btn-control">
                <button type="button" className="btn btn-green">Login</button>
                <button type="button" className="btn btn-accent">Sign up</button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default SignUpPage;
