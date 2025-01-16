

import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, Radio, notification, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import pic from "../assets/images.jpeg";
import pic2 from "../assets/Login-imge-2.png";
import pic3 from "../assets/stellar-classes-logo.png";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onfinishHandler = async (values) => {
    try {
      if (values.password !== values.confirmPassword) {
        message.error("Passwords do not match!");
        return;
      }
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        values
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registered Successfully!", 5);
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error.message);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="main-container">
     
      <div className="pic-container">
        <img src={pic2} alt="" />
      </div>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>

          <div className="form-row">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First Name is required" }]}
              className="form-item"
            >
              <Input placeholder="First Name" type="text" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: false, message: "Last Name is required" }]}
              className="form-item"
            >
              <Input placeholder="Last Name" type="text" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email format" },
              ]}
              className="form-item"
            >
              <Input placeholder="Enter Email" type="email" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="contactNo"
              rules={[{ required: true, message: "Phone is required" }]}
              className="form-item"
            >
              <Input placeholder="Enter your Phone Number" type="text" />
            </Form.Item>
          </div>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select your gender" }]}
            className="form-item"
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
            className="form-item"
          >
            <Input placeholder="Enter Password " type="password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your password" },
            ]}
            className="form-item"
          >
            <Input placeholder="Confirm password" type="password" />
          </Form.Item>

          <div className="button-container">
            <button className="btn" type="submit">
              Register
            </button>
            <Link to="/login" className="m-2">
              Already a user? Login here
            </Link>
          </div>
        </Form>
      </div>
    </div>
    
  );
};

export default Register;
