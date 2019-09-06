import React, { Fragment } from 'react'

import 'antd/dist/antd.css';
import App from '../src/examples/App';

const Home = () => (
  <Fragment>
    <div className="container">
      <App />
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
