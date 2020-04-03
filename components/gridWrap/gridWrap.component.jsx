import { Row, Col } from 'antd';
import { gridSize } from '../../types';

const GridWrap = ({ size = 'sm', children }) => {
  let offset, span;
  switch (size) {
    case gridSize.sm:
      offset = 7;
      span = 10;
      break;
    default:
      offset = 0;
      span = 24;
  }

  return (
    <>
      <Row style={{ margin: '2rem 0 4rem 0' }}>
        <Col
          lg={{ offset: offset, span: span }}
          sm={{ offset: 4, span: 16 }}
          xs={{ offset: 1, span: 22 }}
        >
          {children}
        </Col>
      </Row>
      <style jsx global>
        {`
          body {
            background: #deeefc;
          }
        `}
      </style>
    </>
  );
};

export default GridWrap;
