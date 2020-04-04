import React from 'react'
import {Select, Row, Col} from 'antd'
import { StoreConnect } from "../../../store/store";
import styles from "./requestsSearch.module.scss";
import { requestField } from "../../../types";

const { Option } = Select;

const RequestsSearch = ({
    updateModalRequestKey,
    toggleModalShow,
    requestsValue,
  }) => {
    return (
        <div style={{ margin: "2rem auto", width: "50%" }}>
            <Row>
            <Col span={4}>
                <p style={{ textAlign: "center" }}>ค้นหา</p>
            </Col>
            <Col span={20}>
                <Select
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
                placeholder="ชื่อโรงพยาบาล/จังหวัด"
                style={{ width: "100%" }}
                onChange={(e) => {
                    updateModalRequestKey(parseInt(e));
                    toggleModalShow();
                }}
                >
                {requestsValue.map((e, i) => (
                    <Option value={e.key} key={i}>
                    {e[requestField.hospitalName]}
                    </Option>
                ))}
                </Select>
            </Col>
            </Row>
        </div>
    );
}

const propsMapper = (store) => {
    const { state, dispatch } = store.requests;
    return {
      updateModalRequestKey: (key) => {
        dispatch(updateModalRequestKey(key));
      },
      toggleModalShow: () => {
        dispatch(toggleModalShow());
      },
      updateData: (data) => {
        dispatch(updateData(data));
      },
      requestsValue: state.data,
    };
  };
export default StoreConnect(propsMapper)(RequestsSearch);