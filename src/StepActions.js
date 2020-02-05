import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider, Card, Select } from "antd";
import { Link } from "@reach/router";

const defaultValue = {
  Tipo: "VideoWall",
  Zona: "Camerino",
  Scelta: "VideoBorse"
};

export const StepActions = () => {
  const { Option } = Select;
  const [StepActions, setStepActions] = useState(defaultValue);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    console.log("use Effect");
    var local = localStorage.getItem("Step Actions");
    console.log(JSON.parse(local));
    setStepActions(JSON.parse(local) || defaultValue);
  }, []);

  var nuovaCampagna = localStorage.getItem("Nuova Campagna");
  nuovaCampagna = JSON.parse(nuovaCampagna);

  var StepTempo = localStorage.getItem("Step Tempo");
  StepTempo = JSON.parse(StepTempo);

  var StepLocation = localStorage.getItem("Step Location");
  StepLocation = JSON.parse(StepLocation);

  var StepUtente = localStorage.getItem("Step Utente");
  StepUtente = JSON.parse(StepUtente);

  const onChange = () => {
    localStorage.setItem("Step Actions", JSON.stringify(StepActions));
    console.log(JSON.stringify(StepActions));
    var summary = {
      ...nuovaCampagna,
      ...StepTempo,
      ...StepLocation,
      ...StepUtente,
      ...StepActions
    };

    console.log(summary);

    localStorage.setItem("Summary", JSON.stringify(summary));
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
                  value={StepActions.Tipo}
                  name="Tipo"
                  defaultValue="Pilota"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepActions({
                      ...StepActions,
                      Tipo: value
                    });
                  }}
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
                  value={StepActions.Zona}
                  name="Zona"
                  defaultValue="Camerino"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepActions({
                      ...StepActions,
                      Zona: value
                    });
                  }}
                >
                  <Option value="Camerino">Camerino</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={StepActions.Scelta}
                  name="Scelta"
                  defaultValue="Borse"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepActions({
                      ...StepActions,
                      Scelta: value
                    });
                  }}
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
              <Button onClick={onChange}>Salva</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
