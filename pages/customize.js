import React from 'react';
import { If, Then, Else } from 'react-if';
import Link from 'next/link';

import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

import Layout from '../components/Layout';

class CustomizeProductPage extends React.Component {
  render() {
    return (
      <Layout title={ 'Album' }>
      <div>
        <h1>Customize</h1>
      </div>
      </Layout>
    );
  }
}

export default CustomizeProductPage;
