import React, {Fragment} from 'react'
import Brand from '../components/Brand'
import InfoBox from '../components/InfoBox';
import NavMenu from '../components/NavMenu';

const Home = () => (
  <Fragment>
    <Brand brandName="Vivasoft"/>
    <InfoBox icon="icon" text="text"/>
    <NavMenu/>
  </Fragment>
)

export default Home
