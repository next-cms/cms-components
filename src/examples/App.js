import React, { Fragment } from 'react';
import { Brand, InfoBox, PricingTable, Nav } from '../lib';



import { Icon, Row, Col } from 'antd';


const App = () => {
    return (
        <Fragment>

            {/* <Row type="flex" gutter={24} justify="space-between" align="middle">
                <Col ><InfoBox icon={<Icon type="star" />} text="0999-8888-88" /></Col>
                <Col ><InfoBox icon={<Icon type="star" />} text="info@vivacomsolutions.com" /></Col>
            </Row>
            <Brand imageUrl="http://pihr.xyz/images/pihr-logo.png" brandName="Vivasoft" /> */}


            {/* <PricingTable /> */}
            <Nav />

        </Fragment>
    );
}

export default App;