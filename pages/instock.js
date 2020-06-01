import React from 'react';
import { If, Then, Else } from 'react-if';
import Link from 'next/link';

import axios from 'axios';
import _ from 'lodash';

import Layout from '../components/Layout';

class InstockProductPage extends React.Component {
  render() {
    return (
      <Layout title={ 'Artiste' }>
      <div>
        <h1>Instock Procut</h1>
      </div>
      </Layout>
    );
  }
}

export default InstockProductPage;
