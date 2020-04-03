import React from 'react';
import { StoreConnect } from '../../../store/store';
import styles from './requestsTable.module.scss';
import { Table } from 'antd';
import {
  getFilteredRequests,
  getInjectedHTMLRequests,
  getStatusPriority,
  getCompareString,
  getCompareNumber
} from '../../../utils/requests';
import { requestField, requestFieldLabel } from '../../../types';

const RequestsTable = ({ filter, requestsValue }) => {
  const columns = [
    {
      title: requestFieldLabel.hospitalName,
      dataIndex: requestField.hospitalName,
      sorter: (a, b) =>
        getCompareString(
          a[requestField.hospitalName],
          b[requestField.hospitalName]
        ),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: requestFieldLabel.faceShieldDemand,
      dataIndex: requestField.faceShieldDemand,
      sorter: (a, b) =>
        getCompareNumber(
          a[requestField.faceShieldDemand],
          b[requestField.faceShieldDemand]
        ),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: requestFieldLabel.status,
      dataIndex: requestField.status,
      sorter: (a, b) =>
        getCompareNumber(
          getStatusPriority(a[requestField.status].props.children),
          getStatusPriority(b[requestField.status].props.children)
        ),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: requestFieldLabel.province,
      dataIndex: requestField.province,
      sorter: (a, b) =>
        getCompareString(a[requestField.province], b[requestField.province]),
      sortDirections: ['descend', 'ascend']
    }
  ];
  const data = getFilteredRequests(requestsValue, filter);
  return <Table columns={columns} dataSource={getInjectedHTMLRequests(data)} />;
};

const propsMapper = store => {
  const { state } = store.requests;
  return {
    filter: state.filter,
    requestsValue: state.data
  };
};

export default StoreConnect(propsMapper)(RequestsTable);
