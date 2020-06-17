import React from 'react';
import Link from 'next/link';


import Layout from '../components/Layout';

class CustomizeProductPage extends React.Component {
  render() {
    return (
      <Layout title={ 'Customize-Product' }>
        <section className="bg-gray-light section-one">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                hello world
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default CustomizeProductPage;
