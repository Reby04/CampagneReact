import React, { useState } from "react";
import {
  Row,
  Col,
  DatePicker,
  Button,
  Radio,
  Divider,
  Card,
  Checkbox,
  Select
} from "antd";
import moment from "moment";

export const StepUtente = () => {
  const dateFormat = "DD/MM/YYYY";
  const { Option } = Select;

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
                Step Utente
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <Card title="Dettaglio Utente" style={{ width: 1600 }}>
          <Row>
            <Col span={6}>Sessio</Col>
            <Col span={6}>Compleanno</Col>
            <Col span={6}>Fascia d'età</Col>
            <Col span={6}>Stato civile</Col>
          </Row>
          <div>
            <br></br>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="M"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="M">M</Option>
                  <Option value="F">F</Option>
                </Select>
              </Col>
              <Col span={6}>
                <DatePicker
                  defaultValue={moment("03/02/20", dateFormat)}
                  format={dateFormat}
                />
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="25-35"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="25-35">25-35</Option>
                  <Option value="36-46">36-46</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="Nubile"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Nubile">Nubile</Option>
                  <Option value="Celice">Celibe</Option>
                  <Option value="Sposato">Sposato</Option>
                  <Option value="Vedovo">Vedovo</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <br></br>
          <p></p>
          <div>
            <Row>
              <Col span={6}>Tipologia Indirizzo</Col>
              <Col span={6}>Nazione</Col>
              <Col span={6}>Città</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="Domicilio"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Domicilio">Domicilio</Option>
                  <Option value="Residenza">Residenza</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="Italia"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Italia">Italia</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="Firenze"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Firenze">Firenze</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
        <br></br> <p></p>
        <div>
          <Card title="Fidelity" style={{ width: 1600 }}>
            <Row>
              <Col span={6}>Livello di Fidelity</Col>
              <Col span={6}>Attività Fidelity recente</Col>
            </Row>
            <div>
              <br></br>
              <Row>
                <Col span={6}>
                  <Select
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Fidelity Card Points</Col>
                <Col span={6}>Punti mancanti al livello successivo</Col>
                <Col span={6}>Attenzione</Col>
              </Row>
            </div>
            <br></br>
            <div>
              <Row>
                <Col span={6}>
                  <Select
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Data attivazione Fidelity</Col>
                <Col span={6}>Data ultimo passaggio di livello</Col>
              </Row>
            </div>
            <br></br>
            <Row>
              <Col span={6}>
                <DatePicker
                  defaultValue={moment("03/02/20", dateFormat)}
                  format={dateFormat}
                />
              </Col>
              <Col span={6}>
                <DatePicker
                  defaultValue={moment("03/02/20", dateFormat)}
                  format={dateFormat}
                />
              </Col>
            </Row>
          </Card>
        </div>
        <br></br>
        <p></p>
        <div>
          <Card title="Touch Point Prodotti">
            <Row>
              <Col span={4}>Tipologia Merceologica</Col>
              <Col span={4}>Classe Merceologica</Col>
              <Col span={4}>Sotto classe Merceologica</Col>
              <Col span={4}>Prodotto</Col>
              <Col span={4}>Livello di Interesse</Col>
            </Row>
            <br></br>
            <div>
              <Row>
                <Col span={4}>
                  <Select
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    defaultValue="l1"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="l1">l1</Option>
                    <Option value="l2">l2</Option>
                  </Select>
                </Col>
                <Col>
                  <Button>Rimuovi</Button> <Button>Aggiungi</Button>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
