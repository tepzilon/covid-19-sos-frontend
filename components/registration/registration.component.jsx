import React from "react";
import Form from "antd";
import Item from "antd/lib/list/Item";
import { StoreConnect } from "../../store/store";
import styles from './registration.module.scss';

const Registration = ({}) => {
  return <div>
      <Form>
          <Form.item>
              
          </Form.item>
      </Form>
  </div>;
};

const propsMapper = store => ({});

export default StoreConnect(propsMapper)(Registration);
