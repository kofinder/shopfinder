import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout';

class ProductDetailPage extends React.Component {
  static getInitialProps ({ query: { slug } }) {
    return { slug: slug }
  }
  render() {
    const { slug } = this.props;
    return (
      <Layout title={slug}>
        <section className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Instock Product</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{slug}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="detail">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="../detail.png" className="img-fluid"/>
              </div>
              <div className="col-md-6">
                <h3>Hanes Men's Short Sleeve Beefy-t</h3>
                <div className="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor libero sapien,
                  ut consectetur felis finibus quis. Curabitur eu risus eget ex sodales facilisis
                  sed auctor turpis. Phasellus lorem quam, accumsan sed tortor sed, semper consectetur nulla.
                   Etiam sit amet sem at enim ornare mattis. Aenean faucibus quam at bibendum convallis.
                   Donec ultrices quam nec purus porttitor volutpat id vitae odio. Nullam cursus fermentum augue at auctor.
                   Nullam efficitur non ante eu placerat. Nunc gravida eleifend nibh rutrum semper. Cras augue augue,
                   scelerisque eu dui vel, hendrerit pretium tellus. Curabitur et placerat tellus
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default ProductDetailPage;
