import React, { Fragment } from 'react'
import Brand from '../components/Brand'
import InfoBox from '../components/InfoBox';

import 'antd/dist/antd.css';

const Home = () => (
  <Fragment>
    <Brand brandName="Vivasoft" />
    <InfoBox icon="icon" text="Brand" />
  </Fragment>
)

export default Home
