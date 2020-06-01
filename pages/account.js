import React from 'react';
import { If, Then, Else } from 'react-if';
import { Pagination } from 'react-bootstrap';
import Link from 'next/link';

import axios from 'axios';
import _ from 'lodash';

import Layout from '../components/Layout';

class AccountPage extends React.Component {
  render() {
    return (
      <Layout title={ 'Account' }>
        <div>
          <h1>Account</h1>
        </div>
      </Layout>
    );
  }
}

export default AccountPage;
