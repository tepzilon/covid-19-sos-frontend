import React from "react";
import { StoreConnect } from "../../../store/store";
import styles from "./requestsTable.module.scss";
import { Table } from "antd";
import {
  
} from "../../../types";


const RequestsTable = () => {
    const columns = [
        {
            title: 'ชื่อโรงพยาบาล',
            dataIndex: 'hospital',
            sorter: (a, b) => a.hospital - b.hospital,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'จำนวน face shield',
            dataIndex: 'faceShield',
            sorter: (a, b) => a.faceShield - b.faceShield,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'จำนวนเตียง',
            dataIndex: 'bed',
            sorter: (a, b) => a.bed - b.bed,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'จังหวัด',
            dataIndex: 'province'
        },
    ];
    const data = [
        {
            key: '1',
            hospital: 'โรงพยาบาลสบายดี',
            faceShield: 32,
            bed: 55,
            province: 'กรุงเทพมหานคร'
        },
        {
            key: '2',
            hospital: 'โรงพยาบาลบลาๆ',
            faceShield: 30,
            bed: 58,
            province: 'สมุทรปราการ'
        },
    ];
    return (
        <Table columns={columns} dataSource={data} />
    );
};

const propsMapper = store => ({
  
});

export default StoreConnect(propsMapper)(RequestsTable);
