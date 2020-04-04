import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Card,
  Button,
  Divider,
  Select,
  Modal,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { MaskedInput } from 'antd-mask-input';
import {
  inputField,
  inputFieldLabel,
  hospitalTypes,
  hospitalTypesLabel,
  THAI_PROVINCES,
} from '../../types';
import {
  RequiredFieldRule,
  phoneRule,
  usernameRule,
  passwordRule,
  emailRule,
} from '../../utils/registerRules';
import { StoreConnect } from '../../store/store';
import { updateField } from '../../store/register/register.actions';
import PageHeader from '../pageHeader/pageHeader.component';

import { postRequest } from '../../api/register';

const Register = ({ state, updateField }) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const router = useRouter();

  const registerRequest = async () => {
    setLoading(true);
    const response = await postRequest(state);
    if (response.error) {
      setFetchError(true);
    } else {
      router.push('/register-complete');
    }
    setLoading(false);
  };

  return (
    <Card style={{ borderRadius: '10px' }}>
      <div>
        <PageHeader label="ลงทะเบียนเพื่อขอรับ Face Shield" />
        <div className="container-center">
          <p>
            โรงพยาบาลที่ต้องการอุปกรณ์ดังกล่าว สามารถแจ้งความประสงค์
            โดยกรอกข้อมูลด้านล่างนี้
            <br />
            <br />
            หากต้องการข้อมูลเพิ่มเติม หรือมีข้อสงสัยประการใด
            สามารถติดต่อทีมงานได้ที่ LINE: @meticuly
          </p>
        </div>
      </div>
      <Divider />
      <Form layout="vertical" onFinish={registerRequest}>
        <Form.Item
          label={inputFieldLabel.name}
          name={inputField.name}
          rules={[RequiredFieldRule(inputFieldLabel.name)]}
          onChange={(e) => updateField(inputField.name, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.hospitalName}
          name={inputField.hospitalName}
          rules={[RequiredFieldRule(inputFieldLabel.hospitalName)]}
          onChange={(e) => updateField(inputField.hospitalName, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.hospitalType}
          name={inputField.hospitalType}
          rules={[RequiredFieldRule(inputFieldLabel.hospitalType)]}
          onChange={(e) => updateField(inputField.hospitalType, e.target.value)}
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
          label={inputFieldLabel.faceShieldDemand}
          name={inputField.faceShieldDemand}
          rules={[RequiredFieldRule(inputFieldLabel.faceShieldDemand)]}
          onChange={(e) =>
            updateField(inputField.faceShieldDemand, e.target.value)
          }
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.province}
          name={inputField.province}
          rules={[RequiredFieldRule(inputFieldLabel.province)]}
          // onChange={(val) => updateField(inputField.province, val)}
        >
          <Select
            showSearch
            onChange={(val) => updateField(inputField.province, val)}
          >
            {THAI_PROVINCES.map((province) => (
              <Select.Option value={province}>{province}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.address}
          name={inputField.address}
          rules={[RequiredFieldRule(inputFieldLabel.address)]}
          onChange={(e) => updateField(inputField.address, e.target.value)}
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.phoneNumber}
          name={inputField.phoneNumber}
          rules={[RequiredFieldRule(inputFieldLabel.phoneNumber), phoneRule()]}
          // onChange={e =>
          //   updateField(inputField.phoneNumber, e.target.value)
          // }
        >
          {/* <Input/> */}
          <MaskedInput
            mask="11-1111-1111"
            size="12"
            onChange={(e) =>
              updateField(inputField.phoneNumber, e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.email}
          name={inputField.email}
          rules={[RequiredFieldRule(inputFieldLabel.email), emailRule]}
          onChange={(e) => updateField(inputField.email, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.notice}
          name={inputField.notice}
          rules={[]}
          onChange={(e) => updateField(inputField.notice, e.target.value)}
        >
          <TextArea />
        </Form.Item>

        <Divider />
        <div style={{ marginBottom: '24px' }}>
          กรุณากรอก Username และ Password เพื่อเข้าใช้งานครั้งต่อไป
        </div>

        <Form.Item
          label={inputFieldLabel.username}
          name={inputField.username}
          rules={[RequiredFieldRule(inputFieldLabel.username), usernameRule]}
          onChange={(e) => updateField(inputField.username, e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={inputFieldLabel.password}
          name={inputField.password}
          rules={[RequiredFieldRule(inputFieldLabel.password), passwordRule]}
          onChange={(e) => updateField(inputField.password, e.target.value)}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              ลงทะเบียน
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Modal
        title="เซิร์ฟเวอร์ขัดข้อง"
        visible={fetchError}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setFetchError(false);
            }}
          >
            OK
          </Button>,
        ]}
      >
        <p>ไม่สามารถทำรายการได้ในขณะนี้</p>
      </Modal>
      <style jsx>
        {`
          p {
            width: 418px;
            font-size: 16px;
            line-height: 22px;
            margin-top: 20px;
          }
        `}
      </style>
    </Card>
  );
};

const propsMapper = (store) => {
  const { state, dispatch } = store.register;
  return {
    updateField: (field, value) => {
      dispatch(updateField(field, value));
    },
    state,
  };
};

export default StoreConnect(propsMapper)(Register);
