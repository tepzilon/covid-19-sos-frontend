import React, { useState } from 'react'
import { StoreConnect } from "../../store/store";
import styles from "./requests.module.scss";
import RequestsTable from './requestsTable/requestsTable.component'
import { Card, Select, Modal } from 'antd'
import { updateFilter } from '../../store/requests/requests.actions';
import { requestField } from '../../types';

const { Option } = Select;

const Requests = ({updateFilter, requestsValue}) => {
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    return (
        <Card title={<h1 style={{textAlign: "center"}}>รายชื่อโรงพยาบาลที่ลงทะเบียนเพื่อขอรับ Face Shield</h1>}>
            <div style={{margin: 'auto', width: '50%'}}>
                <p style={{display: 'inline'}} >ค้นหา</p>
                <Select 
                    showSearch 
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }  
                    placeholder="ชื่อโรงพยาบาล/จังหวัด" 
                    style={{width: '80%'}} 
                >
                    {
                        requestsValue.map((e,i) => {
                            return (
                                <Option value={e[requestField.hospitalName]} key={i} >{e[requestField.hospitalName]}</Option>
                            );
                        })
                    }
                </Select>
            </div>
            <Modal
                title="Modal"
                visible={showModal}
            >
                Hello
            </Modal>
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
