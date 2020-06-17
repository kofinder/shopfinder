import React from 'react';
import Link from 'next/link';
import { Checkbox } from 'pretty-checkbox-react';
import InputRange from 'react-input-range';

import Layout from '../components/Layout';

class InstockProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      value: { min: 2, max: 10 }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: true });
  }

  render() {
    return (
      <Layout title={ 'InStock Product' }>
        <section className="instock">
          <div className="container instock-content">
            <div className="row ">
              <aside className="col-lg-3">
                  <h3>ရှာဖွေရန်</h3>
                  <div className="search">
                    <div className="item">
                      <h5>ပစ္စည်းအမည်</h5>
                      <div className="range-slider">
                      <InputRange
                        allowSameValues
                        draggableTrack
                        maxValue={20}
                        minValue={0}
                        onChange={value => this.setState({ value: value })}
                        onChangeComplete={value => console.log(value)}
                        value={this.state.value6} />
                      </div>
                    </div>
                    <div className="item">
                      <h5>အမျိုးအစားများ</h5>
                      <div className="checkbox">
                        <Checkbox animation="smooth"
                          shape="curve" color="success"
                          state={this.state.checked}
                          onChange={this.handleChange}>
                          T-shirt for man
                        </Checkbox>
                      </div>

                      <div className="checkbox">
                        <Checkbox animation="smooth"
                          shape="curve" color="success"
                          state={this.state.checked}
                          onChange={this.handleChange}>
                          T-shirt for Woman
                        </Checkbox>
                      </div>

                      <div className="checkbox">
                        <Checkbox animation="smooth"
                          shape="curve" color="success"
                          state={this.state.checked}
                          onChange={this.handleChange}>
                          Crop Top
                        </Checkbox>
                      </div>

                      <div className="checkbox">
                        <Checkbox animation="smooth"
                          shape="curve" color="success"
                          state={this.state.checked}
                          onChange={this.handleChange}>
                          Long Sleeve
                        </Checkbox>
                      </div>

                      <div className="checkbox">
                        <Checkbox animation="smooth"
                          shape="curve" color="success"
                          state={this.state.checked}
                          onChange={this.handleChange}>
                          Hoodies
                        </Checkbox>
                      </div>

                      <div className="checkbox">
                        <Checkbox animation="smooth"
                          shape="curve" color="success"
                          state={this.state.checked}
                          onChange={this.handleChange}>
                          Cap Hat
                        </Checkbox>
                      </div>
                      <button type="button" className="btn btn-green">search</button>
                    </div>
                  </div>
              </aside>
              <div className="col-lg-9 main">

                  <div className="card">
                    <img src="./image.png" class="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link as="/instock-product/T-Shirt" href='/instock-product/T-Shirt'>
                          <a>Hanes Women's Nano T-Shirt</a>
                        </Link>
                      </h5>
                      <p className="card-text text-success"> 1000,00MMK</p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="./image.png" class="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link as="/instock-product/T-Shirt" href='/instock-product/T-Shirt'>
                          <a>Hanes Sport Women's Cool DRI</a>
                        </Link>
                      </h5>
                      <p className="card-text text-success"> 1000,00MMK</p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="./image.png" class="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link as="/instock-product/T-Shirt" href='/instock-product/T-Shirt'>
                          <a>Amazon Essentials Women's</a>
                        </Link>
                      </h5>
                      <p className="card-text text-success"> 1000,00MMK</p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="./image.png" class="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link as="/instock-product/T-Shirt" href='/instock-product/T-Shirt'>
                          <a>The Next Level Womens Festival</a>
                        </Link>
                      </h5>
                      <p className="card-text text-success"> 1000,00MMK</p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="./image.png" class="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link as="/instock-product/T-Shirt" href='/instock-product/T-Shirt'>
                          <a>Gildan Women's Fitted Cotton T</a>
                        </Link>
                      </h5>
                      <p className="card-text text-success"> 1000,00MMK</p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="./image.png" class="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link as="/instock-product/T-Shirt" href='/instock-product/T-Shirt'>
                          <a>Gildan Womens Softstyle T-Shirt</a>
                        </Link>
                      </h5>
                      <p className="card-text text-success"> 1000,00MMK</p>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default InstockProductPage;
