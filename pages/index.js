import React, { Fragment } from 'react'
import Brand from '../components/Brand'
import InfoBox from '../components/InfoBox';

import 'antd/dist/antd.css';
import { Icon, Row, Col } from 'antd';

const Home = () => (
  <Fragment>
    <div className="container">
      <Row type="flex" gutter={24} justify="space-between" align="middle">
        <Col ><InfoBox icon={<Icon type="star" />} text="0999-8888-88" /></Col>
        <Col ><InfoBox icon={<Icon type="star" />} text="info@vivacomsolutions.com" /></Col>
      </Row>
      <Brand imageUrl="http://pihr.xyz/images/pihr-logo.png" brandName="Vivasoft" />

    </div>


    <style jsx global>
      {`
        body {
          background-color: #3595c9;
        }
        .container {
          width: 1180px;
          margin: auto;
        }
      `}
    </style>

  </Fragment>
)

export default Home
