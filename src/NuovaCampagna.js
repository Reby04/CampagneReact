import React from "react";
import { Row, Col, Input, DatePicker, Button, Divider } from "antd";
import moment from "moment";
import { Select } from "antd";
import { Link } from "@reach/router";

export const NuovaCampagna = () => {
  const dateFormat = "DD/MM/YYYY";
  const { Option } = Select;
  const { TextArea } = Input;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
              <p style={{ textAlign: "center" }}>
                Step Inizializzazione Campagna
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <br></br>

      <Row gutter={16}>
        <Col>
          <div style={{ paddingLeft: 200 }}>
            <div style={{ paddingLeft: 130, width: 335 }}>
              <p>
                Nome Campagna
                <Input placeholder="" />
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: 200 }}>
            <div style={{ paddingLeft: 130, paddingRight: 1300 }}>
              <p>
                Data Inizio Campagna
                <DatePicker
                  defaultValue={moment("03/02/2020", dateFormat)}
                  format={dateFormat}
                />
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: 200 }}>
            <div style={{ paddingLeft: 130, paddingRight: 1300 }}>
              <p>
                Data Fine Campagna
                <DatePicker
                  defaultValue={moment("03/02/2020", dateFormat)}
                  format={dateFormat}
                />
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: 200 }}>
            <div style={{ paddingLeft: 130, paddingRight: 1300 }}>
              <p>
                Profilo Campagna
                <Select
                  defaultValue="Global"
                  style={{ width: 200 }}
                  onChange={handleChange}
                >
                  <Option value="Global">Global Compain</Option>
                  <Option value="Local">Local Compain</Option>
                </Select>
              </p>
            </div>
            <div>
              <div style={{ paddingLeft: 130, paddingRight: 1300 }}>
                <p>
                  Note
                  <TextArea rows={2} />
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ paddingLeft: 1600 }}>
        <Link to="/StepTempo">
          <Button>Avanti</Button>
        </Link>
      </div>
    </div>
  );
};
