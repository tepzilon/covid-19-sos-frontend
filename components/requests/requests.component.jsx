import React, { useEffect, useState } from "react";
import {
  Card, Select, Modal, Row, Col, Spin, Button,
} from "antd";
import { StoreConnect } from "../../store/store";
import styles from "./requests.module.scss";
import RequestsTable from "./requestsTable/requestsTable";
import RequestsModal from "./requestsModal/requestsModal";
import RequestsSearch from "./requestsSearch/requestsSearch";
import { updateData } from "../../store/requests/requests.actions";
import { getRequests } from "../../api";

const Requests = ({ updateData, requestsValue }) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    async function mountGetRequest() {
      setLoading(true);
      const response = await getRequests();
      if (response.error) {
        setFetchError(true);
      } else {
        const res = response.data.map((e, i) => ({
          ...e,
          key: i,
        }));
        updateData(res);
      }
      setLoading(false);
    }
    mountGetRequest();
  }, []);

  return (
    <Card bordered={false}>
      <h1 style={{ textAlign: "center" }}>
        รายชื่อโรงพยาบาลที่ลงทะเบียนเพื่อขอรับ Face Shield
      </h1>
      <RequestsSearch />
      <RequestsModal />
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
            {" "}
            <Spin size="large" style={{ transform: "translateX(-50%)" }} />
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
    updateData: (data) => {
      dispatch(updateData(data));
    },
    requestsValue: state.data,
  };
};
export default StoreConnect(propsMapper)(Requests);
