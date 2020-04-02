import React from "react";
import { StoreConnect } from "../../store/store";
import styles from "./register.module.scss";
import { Form, Input, InputNumber, Radio, Card, Button } from "antd";
import {
  inputField,
  inputFieldLabel,
  hospitalTypes,
  hospitalTypesLabel
} from "../../types";
import TextArea from "antd/lib/input/TextArea";

const Register = () => {
  const RequiredFieldRule = text => ({
    required: true,
    message: "กรุณากรอก" + text
  });

  return (
    <Card>
      <Form layout="vertical">
        <Form.Item
          label={inputFieldLabel.name}
          name={inputField.name}
          rules={[RequiredFieldRule(inputFieldLabel.name)]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.hospitalName}
          name={inputField.hospitalName}
          rules={[RequiredFieldRule(inputFieldLabel.hospitalName)]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.faceShieldDemand}
          name={inputField.faceShieldDemand}
          rules={[RequiredFieldRule(inputFieldLabel.faceShieldDemand)]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.address}
          name={inputField.address}
          rules={[RequiredFieldRule(inputFieldLabel.address)]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.hospitalType}
          name={inputField.hospitalType}
          rules={[RequiredFieldRule(inputFieldLabel.hospitalType)]}
        >
          <Radio.Group onChange={() => {}} value={() => {}}>
            <Radio value={hospitalTypes.public}>
              {hospitalTypesLabel.public}
            </Radio>
            <Radio value={hospitalTypes.private}>
              {hospitalTypesLabel.private}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.numberOfBed}
          name={inputField.numberOfBed}
          rules={[RequiredFieldRule(inputFieldLabel.numberOfBed)]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.notice}
          name={inputField.notice}
          rules={[]}
        >
          <TextArea />
        </Form.Item>

        <div>กรุณากรอกไอดีและพาสเวิร์ดเพื่อเข้าใช้งานครั้งต่อไป??</div>

        <Form.Item
          label={inputFieldLabel.id}
          name={inputField.id}
          rules={[RequiredFieldRule(inputFieldLabel.id)]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.password}
          name={inputField.password}
          rules={[RequiredFieldRule(inputFieldLabel.password)]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary">ลงทะเบียน</Button>
      </Form>
    </Card>
  );
};

const propsMapper = store => ({
  
});

export default StoreConnect(propsMapper)(Register);
// export default Register;
