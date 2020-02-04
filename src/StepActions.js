import React from "react";
import { Row, Col, Button, Divider, Card, Select } from "antd";
import { Link } from "@reach/router";

export const StepActions = () => {
  const { Option } = Select;
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChangeSave = () => {
    // JSON.stringify(Step1);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Nuova Campagna</h1>
      <Divider></Divider>
      <div className="gutter-example">
        <Row gutter={16}>
          <Col span={6}>
            <div style={{ border: 5 }}>
              <h1 style={{ textAlign: "center" }}>Step 1</h1>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div>
              <h1 style={{ textAlign: "center" }}>Step 2</h1>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <h1 style={{ textAlign: "center" }}>Step 3</h1>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <h1 style={{ textAlign: "center" }}>Step 4</h1>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row style={{ height: 10 }} gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <p style={{ textAlign: "center", textSizeAdjust: 8 }}>
                Step Actions
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <Card title=" Actions" style={{ width: 1600 }}>
          <div>
            <Row>
              <Col span={6}>Tipologia d'azione</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={4}>
                <Select
                  defaultValue="Pilota"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Pilota">Pilota VideoWall</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={4}>
                <Button>+</Button>
                <Button>-</Button>
              </Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>Zona VideoWall</Col>
              <Col span={6}>Scelta video</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="Camerino"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Camerino">Camerino</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="Borse"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Borse">Video Borse</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>Prodotto Suggerito</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="Suggest"
                  style={{ width: 160 }}
                  onChange={handleChange}
                  disabled
                >
                  <Option value="Suggest">Invia Suggest</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      <br></br>
      <p></p>

      <div style={{ paddingLeft: 100 }}>
        <Row>
          <Col span={6}>
            <Link to="/StepUtente">
              <Button>Indietro</Button>
            </Link>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>

          <Col span={6}>
            <Link to="/">
              <Button onClick={onChangeSave}>Salva</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
