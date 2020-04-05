import React from "react";
import { Modal, Row, Col } from "antd";
import { StoreConnect } from "../../../store/store";
import styles from "./requestsModal.module.scss";
import { requestField, requestFieldLabel } from "../../../types";
import {
  toggleModalShow,
} from "../../../store/requests/requests.actions";

const RequestsModal = ({
  show, requestKey, requestsValue, toggleModalShow,
}) => (requestsValue.find((e) => e.key === requestKey) ? (
  <Modal
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
  </Modal>
) : null);

const propsMapper = (store) => {
  const { state, dispatch } = store.requests;
  return {
    toggleModalShow: () => {
      dispatch(toggleModalShow());
    },
    show: state.modal.show,
    requestKey: state.modal.requestKey,
    requestsValue: state.data,
  };
};
export default StoreConnect(propsMapper)(RequestsModal);
