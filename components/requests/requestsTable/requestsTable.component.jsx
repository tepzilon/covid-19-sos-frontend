import React from "react";
import { StoreConnect } from "../../../store/store";
import styles from "./requestsTable.module.scss";
import { Table } from "antd";
import { getFilteredRequests } from '../../../store/requests/requests.utils'
import {
    requestField,
    requestFieldLabel
} from "../../../types";

const RequestsTable = ({ requestsValue }) => {
    const columns = [
        {
            title: requestFieldLabel.hospitalName,
            dataIndex: requestField.hospitalName,
            sorter: (a, b) => {
                if(a[requestField.hospitalName] < b[requestField.hospitalName]) return -1;
                else if (a[requestField.hospitalName] > b[requestField.hospitalName]) return 1;
                return 0;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: requestFieldLabel.faceShieldDemand,
            dataIndex: requestField.faceShieldDemand,
            sorter: (a, b) => a[requestField.faceShieldDemand] - b[requestField.faceShieldDemand],
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: requestFieldLabel.numberOfBed,
            dataIndex: requestField.numberOfBed,
            sorter: (a, b) => a[requestField.numberOfBed] - b[requestField.numberOfBed],
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: requestFieldLabel.province,
            dataIndex: requestField.province
        },
    ];
    const data = requestsValue;
    return (
        <Table columns={columns} dataSource={data} />
    );
};

const propsMapper = store => {
    const { state } = store.requests;
    return {
        requestsValue: state.data
    };
};
export default StoreConnect(propsMapper)(RequestsTable);
