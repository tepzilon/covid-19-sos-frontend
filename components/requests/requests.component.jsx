import React from 'react'
import { StoreConnect } from "../../store/store";
import styles from "./requests.module.scss";
import RequestsTable from './requestsTable/requestsTable.component'
import { Card, Select } from 'antd'
import { updateFilter } from '../../store/requests/requests.actions';
import { requestField } from '../../types';

const { Option } = Select;

const Requests = ({updateFilter, requestsValue}) => {

    return (
        <Card title={<h1 style={{textAlign: "center"}}>รายชื่อโรงพยาบาลที่ลงทะเบียนเพื่อขอรับ Face Shield</h1>}>
            <div style={{margin: 'auto', width: '50%'}}>
                <p style={{display: 'inline'}} >ค้นหา</p>
                <Select showSearch placeholder="ชื่อโรงพยาบาล/จังหวัด" style={{width: '80%'}} onChange={e => updateFilter(e.target.value)} >
                    {
                        requestsValue.map(e => {
                            return (
                                <Option value={e[requestField.hospitalName]}>{e[requestField.hospitalName]}</Option>
                            );
                        })
                    }
                </Select>
            </div>
            <RequestsTable />
        </Card>
    );
}

const propsMapper = store => {
    const { state, dispatch } = store.requests;
    return {
        requestsValue: state.data
    };
};
export default StoreConnect(propsMapper)(Requests);
