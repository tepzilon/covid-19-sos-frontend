import React from "react";
import { Card, Divider } from "antd";
import Link from "next/link";
import GridWrap from "../components/gridWrap/gridWrap.component";
import { gridSize, backgroundColours } from "../types";
import PageHeader from "../components/pageHeader/pageHeader.component";

const RegisterPage = () => (
  <GridWrap size={gridSize.sm} color={backgroundColours.register}>
    <Card style={{ borderRadius: "8px" }}>
      <PageHeader label="ลงทะเบียนเพื่อขอรับ Face Shield สำเร็จ" />
      <Divider style={{ marginTop: "48px" }} />
      <div className="container-center">
        <p>
          ข้อมูลความต้องการของท่านได้ถูกบันทึกแล้ว
          {" "}
          <br />
          ทีมงานจะทำการส่งมอบตามลำดับต่อไป หากท่านมีคำถามใด
          {" "}
          <br />
          สามารถติดต่อทีมงานได้ที่ LINE: @meticuly
        </p>
      </div>
      <Link href="/requests">
        <a>ดูรายชื่อโรงพยาบาลทั้งหมดที่ขอรับ Face Shield สำเร็จ</a>
      </Link>
    </Card>
    <style jsx>
      {`
        p {
          margin-bottom: 64px;
        }
        .container-center {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        a {
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 24px;
        }
      `}
    </style>
  </GridWrap>
);

export default RegisterPage;
