import React from "react";
import { Table } from "antd";
import { StoreConnect } from "../../../store/store";
import styles from "./requestsTable.module.scss";
import {
  getFilteredRequests,
  getInjectedHTMLRequests,
  getStatusPriority,
  getCompareString,
  getCompareNumber,
} from "../../../utils/requests";
import {
  updateModalRequestKey,
  toggleModalShow,
} from "../../../store/requests/requests.actions";
import { requestField, requestFieldLabel } from "../../../types";

const RequestsTable = ({ filter, requestsValue, updateModalRequestKey, toggleModalShow }) => {
  const columns = [
    {
      title: requestFieldLabel.hospitalName,
      dataIndex: requestField.hospitalName,
      sorter: (a, b) => getCompareString(
        a[requestField.hospitalName],
        b[requestField.hospitalName],
      ),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: requestFieldLabel.faceShieldDemand,
      dataIndex: requestField.faceShieldDemand,
      sorter: (a, b) => getCompareNumber(
        a[requestField.faceShieldDemand],
        b[requestField.faceShieldDemand],
      ),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: requestFieldLabel.status,
      dataIndex: requestField.status,
      sorter: (a, b) => getCompareNumber(
        getStatusPriority(a[requestField.status].props.children),
        getStatusPriority(b[requestField.status].props.children),
      ),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: requestFieldLabel.province,
      dataIndex: requestField.province,
      sorter: (a, b) => getCompareString(a[requestField.province], b[requestField.province]),
      sortDirections: ["descend", "ascend"],
    },
  ];
  const data = requestsValue;
  return (
    <Table
      columns={columns}
      dataSource={getInjectedHTMLRequests(data)}
      onRow={(row, index) => ({
        onClick: (e) => {
          updateModalRequestKey(requestsValue[index].key);
          toggleModalShow();
        },
      })}
    />
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
    requestsValue: state.data,
  };
};

export default StoreConnect(propsMapper)(RequestsTable);
