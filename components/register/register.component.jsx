import React from "react";
import { Form, Input } from "antd";
import { StoreConnect } from "../../store/store";
import styles from "./register.module.scss";

const Register = ({}) => {
  return (
    <div>
      Hello
      <Form>
        <Form.item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.item>
      </Form>
    </div>
  );
};

const propsMapper = store => ({});

// export default StoreConnect(propsMapper)(Register);
export default Register;
