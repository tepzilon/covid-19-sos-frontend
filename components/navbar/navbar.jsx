import React from 'react'
import Link from 'next/link'
import { Row, Col, Button } from 'antd';

const Navbar = () => {
    return (
        <div style={{height: '7.5rem', backgroundColor: '#deeefc'}}>
            <Row align="middle">
                <Col offset={1} span={11} >
                    <img
                        src="cu_eng_meticuly.png"
                        alt="chula engineering and meticuly logo"
                        style={{width: '120px', height: '120px'}}
                    />
                </Col>
                <Col offset={1} span={10} style={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <Link href='/register'>
                        <Button type="primary" style={{borderRadius: '4px'}}>
                            ลงทะเบียน
                        </Button>
                    </Link>
                    
                </Col>
            </Row>
            
        </div>
    )
}

export default Navbar;