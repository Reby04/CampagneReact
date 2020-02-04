import React, { useState, useEffect } from "react";
import { Row, Col, Input, DatePicker, Button, Divider } from "antd";
import moment from "moment";
import { Select } from "antd";
import { Link } from "@reach/router";

export const NuovaCampagna = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const { Option } = Select;
  const { TextArea } = Input;
  const [nuovaCampagna, setNuovaCampagna] = useState({
    nomeCampagna: "",
    dataInizio: "",
    dataFine: "",
    profiloCampagna: "",
    note: ""
  });
  console.log(nuovaCampagna);

  useEffect(() => {
    console.log("use Effect");
    var local = localStorage.getItem("Nuova Campagna");
    console.log(JSON.parse(local));
    setNuovaCampagna(JSON.parse(local));
  }, []);

  /* function handleChange(event) {
    console.log(`selected ${event}`);
  }
*/
  const onChangeInput = event => {
    console.log(event.target.name);
    setNuovaCampagna({
      ...nuovaCampagna,
      [event.target.name]: event.target.value
    });
  };

  const onChange = () => {
    localStorage.setItem("Nuova Campagna", JSON.stringify(nuovaCampagna));
  };

  return (
    <div style={{ paddingLeft: 80, paddingTop: 50, paddingRight: 80 }}>
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
                Nuova Campagna
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <br></br>
      <Row>
        <Col span={6}>Nome Campagna</Col>
        <Col span={6}>
          <Input name="nomeCampagna" placeholder="" onChange={onChangeInput} />
        </Col>
      </Row>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Data Inizio Campagna</Col>
          <Col span={6}>
            <DatePicker
              defaultValue={moment("04/02/2020", dateFormatList[0])}
              name="dataInizio"
              format={dateFormatList}
              onChange={(date, dateString) => {
                setNuovaCampagna({
                  ...nuovaCampagna,
                  dataInizio: date.valueOf()
                });
              }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Data Fine Campagna</Col>
          <Col span={6}>
            <DatePicker
              defaultValue={moment("04/02/2020", dateFormatList[0])}
              name="dataFine"
              format={dateFormatList}
              onChange={(date, dateString) => {
                setNuovaCampagna({
                  ...nuovaCampagna,
                  dataInizio: date.valueOf()
                });
              }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Profilo Campagna</Col>
          <Col span={6}>
            <Select
              name="profiloCampagna"
              defaultValue="Global"
              style={{ width: 160 }}
              onChange={value => {
                setNuovaCampagna({
                  ...nuovaCampagna,
                  profiloCampagna: value
                });
              }}
            >
              <Option value="Global">Global Campain</Option>
              <Option value="Local">Local Campain</Option>
            </Select>
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Note</Col>
          <Col span={6}>
            <TextArea
              name="note"
              onChange={onChangeInput}
              rows={2}
              style={{ paddingRight: 100 }}
            />
          </Col>
        </Row>
      </div>
      <div>
        <br></br>
        <p></p>

        <div>
          <Row>
            <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={6}></Col>

            <Col span={6}>
              <Link to="/StepTempo">
                <Button onClick={onChange}>Avanti</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
