
import React from "react";
import { Form, Input, notification, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      console.log("Login form values:", values); // Debug log
      const res = await axios.post("http://localhost:3000/api/v1/user/login", values);
      dispatch(hideLoading());
     console.log("Sourah")
      if (res.data.success) {
        message.success("Login Successful!", 5);
        console.log("Login response data:", res.data); // Debug log
        // Example: Save token if required
        localStorage.setItem("token", res.data.token);
        navigate("/"); // Navigate to homepage
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error("Login error:", error.message); // Debug log
      message.error("Something went wrong during login.");
    }
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="login-form">
        <h3 className="text-center">Login Form</h3>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <div className="button-container">
          <button className="btn" type="submit">Login</button>
          <a href="/register" className="m-2">New user? Register here</a>
        </div>
      </Form>
    </div>

  );
};

export default Login;
