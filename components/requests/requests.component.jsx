import React from 'react'
import { StoreConnect } from "../../store/store";
import styles from "./requests.module.scss";
import RequestsTable from './requestsTable/requestsTable.component'
import { Card, Input } from 'antd'
import { updateFilter } from '../../store/requests/requests.actions';
import {
    requestField
} from "../../types";

const Requests = ({updateFilter, requestsValue}) => {

    return (
        <Card title={<h1 style={{textAlign: "center"}}>รายชื่อโรงพยาบาลที่ลงทะเบียนเพื่อขอรับ Face Shield</h1>}>
            <div style={{margin: 'auto', width: '50%'}}>
                <p style={{display: 'inline'}} >ค้นหา</p>
                <Input placeholder="ชื่อโรงพยาบาล/จังหวัด" style={{width: '80%'}} onChange={e => updateFilter(e.target.value)} />
            </div>
            <RequestsTable />
        </Card>
    );
}

const propsMapper = store => {
    const { state, dispatch } = store.requests;
    return {
        updateFilter: filter => {
            dispatch(updateFilter(filter));
        },
        requestsValue: state.data
    };
};
export default StoreConnect(propsMapper)(Requests);