import React from "react";
import { useState } from "react";
import {
  Row,
  Col,
  TimePicker,
  Button,
  Radio,
  Divider,
  Card,
  Checkbox,
  Select
} from "antd";
import moment from "moment";
import { Link } from "@reach/router";

export const StepTempo = () => {
  const { Option } = Select;
  const [selectedOptions, setPlainOptions] = useState("Condizione temporale");
  const [selectedWeek, setSelectedWeek] = useState("");
  const option = [
    { label: "Condizione temporale", value: "Condizione temporale" },
    { label: "Sempre", value: "Sempre" }
  ];

  const week = [
    { label: "Lun", value: "Lun" },
    { label: "Mar", value: "Mar" },
    { label: "Mer", value: "Mer" },
    { label: "Gio", value: "Gio" },
    { label: "Ven", value: "Ven" },
    { label: "Sab", value: "Sab" },
    { label: "Dom", value: "dom" }
  ];

  const format = "HH:mm";

  const onChangeOption = e => {
    console.log("radio1 checked", e.target.value);
    setPlainOptions(e.target.value);
  };

  const onChangeWeek = e => {
    setSelectedWeek(e);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
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
                Step Tempo
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <div style={{ paddingLeft: 130 }}>
        <Radio.Group
          options={option}
          onChange={onChangeOption}
          value={selectedOptions}
        ></Radio.Group>
      </div>
      <br></br>
      <div style={{ paddingLeft: 100 }}>
        {selectedOptions === "Condizione temporale" && (
          <Card title="Condizione Temporale" style={{ width: 800 }}>
            <Checkbox.Group
              options={week}
              defaultValue={["Lun"]}
              onChange={onChangeWeek}
            />
            <Checkbox defaultChecked={false}>Festivo</Checkbox>
            <div>
              <Checkbox style={{ paddingLeft: 444 }} defaultChecked={false}>
                Tutti i GG
              </Checkbox>
            </div>

            <div style={{ paddingLeft: 100 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <p>Ora Inizio</p>
                  <TimePicker
                    defaultValue={moment("00:00", format)}
                    format={format}
                  />
                </Col>
                <Col span={6}>
                  <p>Ora Fine</p>
                  <TimePicker
                    defaultValue={moment("00:00", format)}
                    format={format}
                  />
                </Col>
                <p></p>
                <br></br>
                <Col span={6}>
                  <Button>Rimuovi</Button>
                </Col>
              </Row>
              <p></p>
              <Row gutter={16}>
                <Col span={6}>
                  <TimePicker
                    defaultValue={moment("00:00", format)}
                    format={format}
                  />
                </Col>
                <Col span={6}>
                  <TimePicker
                    defaultValue={moment("00:00", format)}
                    format={format}
                  />
                </Col>
                <Col span={6}>
                  <Button>Rimuovi</Button>
                </Col>
                <Col>
                  <Button>Aggiungi</Button>
                </Col>
              </Row>
            </div>
          </Card>
        )}
        <br></br>
        <p></p>
        <br></br>
        <Card title="Condizioni meteo" style={{ width: 800 }}>
          <div>
            <Row>
              <Col span={6}>
                <p>Stagione</p>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="autunno"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="autunno">Autunno</Option>
                  <Option value="inverno">Inverno</Option>
                  <Option value="estate">Estate</Option>
                  <Option value="Primavera">Primavera</Option>
                </Select>
              </Col>
              <Col span={6}>
                <p>Temperatura Max oderina</p>{" "}
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="10"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                </Select>
              </Col>
            </Row>
            <div>
              <Row>
                <Col span={6}>
                  <p>Temperatura attuale </p>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <p>Temperatura Max periodo</p>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6}>
                  <p>Meteo </p>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="Nuvoloso"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="Nuvoloso">Nuvoloso</Option>
                    <Option value="Soleggiato">Soleggiato</Option>
                    <Option value="Neve">Neve</Option>
                    <Option value="Pioggia">Pioggia</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
      <br></br>
      <p></p>
      <div style={{ paddingLeft: 100 }}>
        <Row>
          <Col span={6}>
            <Link to="/NuovaCampagna">
              <Button>Indietro</Button>
            </Link>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>

          <Col span={6}>
            <Link to="/StepLocation">
              <Button>Avanti</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
