import React from "react";
import "../../../static/contactForm.css";
import {
  Icon,
  Form,
  Input,
  Button
} from "antd";

const ContactForm = props => {

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="main">
      <div className="container">
        <div className="contact-form">
          <div className="partner">
            <div className="partner-details">
              <h1>Become a partner</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mollis odio mattis, lobortis leo id, bibendum nulla. Nunc eu
                augue purus. Mauris vehicula aliquam mi sed iaculis. Praesent at
                dapibus odio. Sed cursus pulvinar bibendum. Fusce consequat
                lorem vitae mauris consectetur, sit amet dapibus dui gravida.
                Nunc vel ipsum sodales urna mattis eleifend a at dui. Vestibulum
                suscipit tristique gravida.
              </p>
            </div>
            <div className="partner-info">
              <div className="partner-img">
                <img
                  src="../../../static/Band-Logo.png"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <ul>
                  <li>Partner Director</li>
                  <li>
                    <b>FIRSTNAME LASTNAME</b>
                  </li>
                  <li>+358 40 123 12344</li>
                </ul>
                <div className="social-icons">
                  <div>
                    <Icon type="linkedin" style={{ fontSize: "32px" }} />
                  </div>
                  <div>
                    <Icon type="twitter" style={{ fontSize: "32px" }} />
                  </div>
                  <div>
                    <Icon type="facebook" style={{ fontSize: "32px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form" >
            <div style={{ backgroundColor: "whitesmoke" }}>
              {/* <div>
                <h4>INTERESTED IN BECOMING A PARTNER?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mollis odio mattis, lobortis leo id, bibendum nulla. Nunc eu
                  augue purus. Mauris vehicula aliquam mi sed iaculis. Praesent
                  at dapibus odio.
                </p>
              </div> */}
              {/* <label>NAME</label>
              <br />
              <input type="text" name="name" />
              <br />
              <label>COMPANY</label>
              <br />
              <input type="text" name="company" />
              <br />
              <label>PHONE</label>
              <br />
              <input type="text" name="phone" />
              <br />
              <label>EMAIL</label>
              <br />
              <input type="email" name="email" />
              <br />
              <div className="submit-btn">
                <button className=" primary-button">SUBMIT</button>
              </div> */}

              <Form className="form-details" layout="vertical" onSubmit={handleSubmit}>
                <h5>INTERESTED IN BECOMING A PARTNER?</h5>
                <p>
                  Have a data gathering service or know how to use data to gain valuable insight? Leave your contact info and we'll get in touch!
                </p>
                <Form.Item
                  label={
                    <span>
                      Name
                  </span>
                  }
                >
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Company">
                  {getFieldDecorator('company', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your company!',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>

                <Form.Item label="Phone">
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your phone!',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>

                <Form.Item label="E-mail">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>

                <Form.Item>
                  <Button className="form-submit-btn" size="large" type="primary" htmlType="submit" shape="round">
                    SUBMIT
                  </Button>
                </Form.Item>
              </Form>

            </div>
          </div>
          <div>image</div>
        </div>
      </div>
    </div>
  );
};
const WrappedContactForm = Form.create({ name: 'register' })(ContactForm);
export default WrappedContactForm;
