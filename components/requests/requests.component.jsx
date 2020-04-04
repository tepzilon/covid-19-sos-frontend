import React, { useEffect, useState } from 'react';
import { Card, Select, Modal, Row, Col, Spin, Button } from 'antd';
import { StoreConnect } from '../../store/store';
import styles from './requests.module.scss';
import RequestsTable from './requestsTable/requestsTable.component';
import {
  updateModalRequestKey,
  toggleModalShow,
  updateData,
} from '../../store/requests/requests.actions';
import { getRequests } from '../../api';
import { requestField, requestFieldLabel, gridSize } from '../../types';

const { Option } = Select;

const Requests = ({
  updateModalRequestKey,
  toggleModalShow,
  updateData,
  show,
  requestKey,
  requestsValue,
}) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    async function mountGetRequest() {
      setLoading(true);
      const response = await getRequests();
      console.log(response);
      if (response.error) {
        setFetchError(true);
      } else {
        updateData(response.data);
      }
      setLoading(false);
    }
    mountGetRequest();
  }, []);

  return (
    <Card bordered={false}>
      <h1 style={{ textAlign: 'center' }}>
        รายชื่อโรงพยาบาลที่ลงทะเบียนเพื่อขอรับ Face Shield
      </h1>
      <div style={{ margin: '2rem auto', width: '50%' }}>
        <Row>
          <Col span={4}>
            <p style={{ textAlign: 'center' }}>ค้นหา</p>
          </Col>
          <Col span={20}>
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="ชื่อโรงพยาบาล/จังหวัด"
              style={{ width: '100%' }}
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
      {/* <Modal
          title={
            requestsValue.find((e) => e.key === requestKey)[
              requestField.hospitalName
            ]
          }
          visible={show}
          onCancel={toggleModalShow}
          footer={null}
        >
          <Row>
            <Col span={8}>{requestFieldLabel.name}</Col>
            <Col span={16}>
              {
                requestsValue.find((e) => e.key === requestKey)[
                  requestField.name
                ]
              }
            </Col>
          </Row>
          <Row>
            <Col span={8}>{requestFieldLabel.phoneNumber}</Col>
            <Col span={16}>
              {
                requestsValue.find((e) => e.key === requestKey)[
                  requestField.phoneNumber
                ]
              }
            </Col>
          </Row>
          <Row>
            <Col span={8}>{requestFieldLabel.address}</Col>
            <Col span={16}>
              {
                requestsValue.find((e) => e.key === requestKey)[
                  requestField.address
                ]
              }
            </Col>
          </Row>
        </Modal> */}
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
        <p>ไม่สามารถรับข้อมูลจากเซิร์ฟเวอร์ได้ในขณะนี้</p>
      </Modal>
      {loading ? (
        <Row>
          <Col offset={12}>
            {' '}
            <Spin size="large" style={{ transform: 'translateX(-50%)' }} />
          </Col>
        </Row>
      ) : null}
      <RequestsTable />
    </Card>
  );
};

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
    show: state.modal.show,
    requestKey: state.modal.requestKey,
    requestsValue: state.data,
  };
};
export default StoreConnect(propsMapper)(Requests);
