import React from "react";
import { useState, useEffect } from "react";
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

  const [stepTempo, setStepTempo] = useState({
    Checkbox: "",
    Festivo: "",
    TuttiGG: "",
    Time1: "",
    Time2: "",
    Time3: "",
    Time4: "",
    Stagioni: "",
    Temp: "",
    TempAttuale: "",
    TempMax: "",
    Meteo: ""
  });

  useEffect(() => {
    console.log("use Effect");
    var local = localStorage.getItem("Step Tempo");
    console.log(JSON.parse(local));
    setStepTempo(JSON.parse(local));
  }, []);

  console.log(stepTempo);
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

  /* const onChangeWeek = e => {
    setSelectedWeek(e);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };*/

  const onChange = () => {
    localStorage.setItem("Step Tempo", JSON.stringify(stepTempo));
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
              name="Checkbox"
              options={week}
              defaultValue={["Lun"]}
              onChange={value => {
                setStepTempo({
                  ...stepTempo,
                  Checkbox: value
                });
              }}
            />
            <Checkbox
              name="Festivo"
              defaultChecked={false}
              onChange={value => {
                setStepTempo({
                  ...stepTempo,
                  Checkbox: value
                });
              }}
            >
              Festivo
            </Checkbox>
            <div>
              <Checkbox
                name="TuttiGG"
                style={{ paddingLeft: 444 }}
                defaultChecked={false}
                onChange={value => {
                  setStepTempo({
                    ...stepTempo,
                    Checkbox: value
                  });
                }}
              >
                Tutti i GG
              </Checkbox>
            </div>

            <div style={{ paddingLeft: 100 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <p>Ora Inizio</p>
                  <TimePicker
                    name="Time1"
                    defaultValue={moment("00:00", format)}
                    format={format}
                    onChange={(time, timeSring) =>
                      setStepTempo({
                        ...stepTempo,
                        Time1: time.valueOf()
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <p>Ora Fine</p>
                  <TimePicker
                    name="Time2"
                    defaultValue={moment("00:00", format)}
                    format={format}
                    onChange={(time, timeString) =>
                      setStepTempo({
                        ...stepTempo,
                        Time2: time.valueOf()
                      })
                    }
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
                    name="Time3"
                    defaultValue={moment("00:00", format)}
                    format={format}
                    onChange={(time, timeSring) =>
                      setStepTempo({
                        ...stepTempo,
                        Time3: time.valueOf()
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <TimePicker
                    name="Time4"
                    defaultValue={moment("00:00", format)}
                    format={format}
                    onChange={(time, timeSring) =>
                      setStepTempo({
                        ...stepTempo,
                        Time4: time.valueOf()
                      })
                    }
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
                  name="Stagioni"
                  defaultValue="autunno"
                  style={{ width: 120 }}
                  onChange={value => {
                    setStepTempo({
                      ...stepTempo,
                      Stagioni: value
                    });
                  }}
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
                  name="Temp"
                  defaultValue="10"
                  style={{ width: 120 }}
                  onChange={value => {
                    setStepTempo({
                      ...stepTempo,
                      Temp: value
                    });
                  }}
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
                    name="TempAttuale"
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={value => {
                      setStepTempo({
                        ...stepTempo,
                        TempAttuale: value
                      });
                    }}
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
                    name="TempMax"
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={value => {
                      setStepTempo({
                        ...stepTempo,
                        TempMax: value
                      });
                    }}
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
                    name="Meteo"
                    defaultValue="Nuvoloso"
                    style={{ width: 120 }}
                    onChange={value => {
                      setStepTempo({
                        ...stepTempo,
                        Meteo: value
                      });
                    }}
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
              <Button onClick={onChange}>Avanti</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
