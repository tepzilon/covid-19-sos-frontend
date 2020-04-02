import React from 'react'
import styles from "./requests.module.scss";
import RequestsTable from './requestsTable/requestsTable.component'
import { Card } from 'antd'

const Requests = () => {

    return (
        <Card title={<h1 style={{textAlign: "center"}}>รายชื่อโรงพยาบาลที่ลงทะเบียนเพื่อขอรับ Face Shield</h1>}>
            <RequestsTable />
        </Card>
    );
}

export default Requests;