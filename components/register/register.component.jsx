import React from 'react';
import { StoreConnect } from '../../store/store';
import styles from './register.module.scss';
import { Form, Input, InputNumber, Radio, Card, Button, Divider } from 'antd';
import {
  inputField,
  inputFieldLabel,
  hospitalTypes,
  hospitalTypesLabel
} from '../../types';
import TextArea from 'antd/lib/input/TextArea';
import { MaskedInput } from 'antd-mask-input';
import { updateField } from '../../store/register/register.actions';

const Register = ({ updateField }) => {
  const RequiredFieldRule = text => ({
    required: true,
    message: 'กรุณากรอก' + text
  });
  const phoneRule = () => ({
    pattern: new RegExp(/^0[0-9]-[0-9]{3}-[0-9]{4}$/, 'i'),
    message: 'invalid number'
  });

  return (
    <Card>
      <div>
        <h1>ลงทะเบียนเพื่อขอรับ Face shield</h1>
        <p>
          คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย
          คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย
        </p>
      </div>
      <Divider />
      <Form layout="vertical">
        <Form.Item
          label={inputFieldLabel.name}
          name={inputField.name}
          rules={[RequiredFieldRule(inputFieldLabel.name)]}
          onChange={e => updateField(inputField.name, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.hospitalName}
          name={inputField.hospitalName}
          rules={[RequiredFieldRule(inputFieldLabel.hospitalName)]}
          onChange={e => updateField(inputField.hospitalName, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.faceShieldDemand}
          name={inputField.faceShieldDemand}
          rules={[RequiredFieldRule(inputFieldLabel.faceShieldDemand)]}
          onChange={e =>
            updateField(inputField.faceShieldDemand, e.target.value)
          }
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.address}
          name={inputField.address}
          rules={[RequiredFieldRule(inputFieldLabel.address)]}
          onChange={e => updateField(inputField.address, e.target.value)}
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.phoneNumber}
          name={inputField.phoneNumber}
          rules={[RequiredFieldRule(inputFieldLabel.phoneNumber), phoneRule()]}
          // onChange={e =>
          //   updateField(inputField.faceShieldDemand, e.target.value)
          // }
        >
          {/* <Input/> */}
          <MaskedInput
            mask="11-111-1111"
            size="11"
            onChange={e =>
              updateField(inputField.faceShieldDemand, e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.hospitalType}
          name={inputField.hospitalType}
          rules={[RequiredFieldRule(inputFieldLabel.hospitalType)]}
          onChange={e => updateField(inputField.hospitalType, e.target.value)}
        >
          <Radio.Group>
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
          onChange={e => updateField(inputField.numberOfBed, e.target.value)}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.notice}
          name={inputField.notice}
          rules={[]}
          onChange={e => updateField(inputField.notice, e.target.value)}
        >
          <TextArea />
        </Form.Item>

        <Divider />
        <div>กรุณากรอกไอดีและพาสเวิร์ดเพื่อเข้าใช้งานครั้งต่อไป??</div>

        <Form.Item
          label={inputFieldLabel.username}
          name={inputField.username}
          rules={[RequiredFieldRule(inputFieldLabel.username)]}
          onChange={e => updateField(inputField.username, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.password}
          name={inputField.password}
          rules={[RequiredFieldRule(inputFieldLabel.password)]}
          onChange={e => updateField(inputField.password, e.target.value)}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            ลงทะเบียน
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const propsMapper = store => {
  const { state, dispatch } = store.register;
  return {
    updateField: (field, value) => {
      dispatch(updateField(field, value));
    }
  };
};

export default StoreConnect(propsMapper)(Register);
