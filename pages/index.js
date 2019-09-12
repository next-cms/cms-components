import React, { Fragment } from 'react'

import App from '../src/examples/App';

const Home = () => (
  <Fragment>
    <div className="container">
      <App />
    </div>


    <style jsx="true" global={true}>
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
