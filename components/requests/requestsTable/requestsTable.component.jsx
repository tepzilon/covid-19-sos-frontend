import React from "react";
import { StoreConnect } from "../../../store/store";
import styles from "./requestsTable.module.scss";
import { Table } from "antd";
import {
    requestField,
    requestFieldLabel
} from "../../../types";


const RequestsTable = ({ requestsValue }) => {
    const columns = [
        {
            title: requestFieldLabel.hospitalName,
            dataIndex: requestField.hospitalName,
            sorter: (a, b) => a.hospital - b.hospital,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: requestFieldLabel.faceShieldDemand,
            dataIndex: requestField.faceShieldDemand,
            sorter: (a, b) => a.faceShield - b.faceShield,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: requestFieldLabel.numberOfBed,
            dataIndex: requestField.numberOfBed,
            sorter: (a, b) => a.bed - b.bed,
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
    const { state, dispatch } = store.requests;
    return {
        updateFilter: () => {
            dispatch(updateField(field, value));
        },
        requestsValue: state.data
    };
};
export default StoreConnect(propsMapper)(RequestsTable);
