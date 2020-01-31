import React from 'react';
import { Row, Col } from 'antd';

export const NuovaCampagna = () => {

    return (
<div>
    <h1 style={{textAlign: 'center'}}>Nuova Campagna</h1>
    
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div><h1 style={{textAlign: 'center'}}>Step 1</h1></div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div><h1 style={{textAlign: 'center'}}>Step 2</h1></div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div><h1 style={{textAlign: 'center'}}>Step 3</h1></div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div><h1 style={{textAlign: 'center'}}>Step 4</h1></div>
      </Col>
    </Row>
</div>
    );

}