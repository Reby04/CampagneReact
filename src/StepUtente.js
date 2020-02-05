import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  DatePicker,
  Button,
  Divider,
  Card,
  Select,
  Radio
} from "antd";
import moment from "moment";
import { Link } from "@reach/router";
import { StepActions } from "./StepActions";

const defaultValue = {
  sesso: "M",
  data: moment().valueOf(),
  fascia: "35-45",
  stato: "Nubile",
  indirizzo: "Domicilio",
  Nazione: "Italia",
  Città: "Firenze",
  Livello: "Alta",
  Attività: "Alta",
  Punti: "meno di",
  PuntiMancanti: "meno di",
  Attenzione: "Alta",
  DataPassaggio: moment().valueOf(),
  DataAttivazione: moment().valueOf(),
  Tipologia: "ComboBox",
  Classe: "ComboBox",
  Sottoclasse: "ComboBox",
  Prodotto: "ComboBox",
  LivelloInteresse: "l1",
  FrequenzaAcquisto: "ComboBox",
  FrequenzaOnline: "ComboBox",
  FrequenzaNegozio: "ComboBox",
  UltimoAcquisto: "ComboBox",
  AccessoNegozio: "ComboBox",
  AccessoOnline: "ComboBox",
  FasciaImporto: "ComboBox",
  Negozio: "NegozioFavorito",
  NazioneNegozio: "Italia",
  TipologiaPOS: "Boutique",
  POS: "sanGiovanni",
  CondizioneTemp: "ComboBox",
  Tipo: "Camerino"
};

export const StepUtente = () => {
  const dateFormat = "DD/MM/YYYY";
  const { Option } = Select;
  const option = [
    { label: "Negozio Favorito", value: "negozioFavorito" },
    { label: "Negozio Frequentato", value: "negozioFrequentato" }
  ];

  useEffect(() => {
    console.log("use Effect");
    var local = localStorage.getItem("Step Utente");
    console.log(JSON.parse(local));
    setStepUtente(JSON.parse(local) || defaultValue);
  }, []);

  const [StepUtente, setStepUtente] = useState(defaultValue);

  const onChange = () => {
    localStorage.setItem("Step Utente", JSON.stringify(StepUtente));
    console.log(JSON.stringify(StepUtente));
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
                  value={StepUtente.sesso}
                  name="sesso"
                  defaultValue="M"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepUtente({
                      ...StepUtente,
                      sesso: value
                    });
                  }}
                >
                  <Option value="M">M</Option>
                  <Option value="F">F</Option>
                </Select>
              </Col>
              <Col span={6}>
                <DatePicker
                  value={moment(StepUtente.data)}
                  name="data"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setStepUtente({
                      ...StepUtente,
                      data: date.valueOf()
                    });
                  }}
                />
              </Col>
              <Col span={6}>
                <Select
                  value={StepUtente.fascia}
                  name="fascia"
                  defaultValue="25-35"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepUtente({
                      ...StepUtente,
                      fascia: value
                    });
                  }}
                >
                  <Option value="25-35">25-35</Option>
                  <Option value="36-46">36-46</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={StepUtente.stato}
                  name="stato"
                  defaultValue="Nubile"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepUtente({
                      ...StepUtente,
                      stato: value
                    });
                  }}
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
                  value={StepUtente.indirizzo}
                  name="indirizzo"
                  defaultValue="Domicilio"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepUtente({
                      ...StepUtente,
                      indirizzo: value
                    });
                  }}
                >
                  <Option value="Domicilio">Domicilio</Option>
                  <Option value="Residenza">Residenza</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={StepUtente.Domicilio}
                  name="Nazione"
                  defaultValue="Italia"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepUtente({
                      ...StepUtente,
                      Domicilio: value
                    });
                  }}
                >
                  <Option value="Italia">Italia</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={StepUtente.Residenza}
                  name="Città"
                  defaultValue="Firenze"
                  style={{ width: 160 }}
                  onChange={value => {
                    setStepUtente({
                      ...StepUtente,
                      Residenza: value
                    });
                  }}
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
                    value={StepUtente.Livello}
                    name="Livello"
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Livello: value
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={StepUtente.Attività}
                    name="Attività"
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Attività: value
                      });
                    }}
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
                    value={StepUtente.Punti}
                    name="Punti"
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Punti: value
                      });
                    }}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={StepUtente.PuntiMancanti}
                    name="PuntiMancanti"
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        PuntiMancanti: value
                      });
                    }}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={StepUtente.Attenzione}
                    name="Attenzione"
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Attenzione: value
                      });
                    }}
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
                  value={moment(StepUtente.DataAttivazione)}
                  name="DataAttivazione"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setStepUtente({
                      ...StepUtente,
                      DataAttivazione: date.valueOf()
                    });
                  }}
                />
              </Col>
              <Col span={6}>
                <DatePicker
                  value={moment(StepUtente.DataPassaggio)}
                  name="DataPassaggio"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setStepUtente({
                      ...StepUtente,
                      DataPassaggio: date.valueOf()
                    });
                  }}
                />
              </Col>
            </Row>
          </Card>
        </div>
        <br></br>
        <p></p>
        <div>
          <Card title="Touch Point Prodotti" style={{ width: 1600 }}>
            <Row>
              <Col span={4}>Tipologia Merceologica</Col>
              <Col span={4}>Classe Merceologica</Col>
              <Col span={4}>Sottoclasse Merceologica</Col>
              <Col span={4}>Prodotto</Col>
              <Col span={4}>Livello di Interesse</Col>
            </Row>
            <br></br>
            <div>
              <Row>
                <Col span={4}>
                  <Select
                    value={StepUtente.Tipologia}
                    name="Tipologia"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Tipologia: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={StepUtente.Classe}
                    name="Classe"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Classe: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={StepUtente.Sottoclasse}
                    name="Sottoclasse"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Sottoclasse: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={StepUtente.Prodotto}
                    name="Prodotto"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        Prodotto: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={StepUtente.LivelloInteresse}
                    name="LivelloInteresse<"
                    defaultValue="l1"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        LivelloInteresse: value
                      });
                    }}
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
        <br></br>
        <p></p>
        <div>
          <Card title="Analisi e Frequenza" style={{ width: 1600 }}>
            <Row>
              <Col span={6}>Frequenza media acquisto cliente</Col>
              <Col span={6}>Frequenza media accesso online</Col>
              <Col span={6}>Frequenza media accesso in negozio</Col>
            </Row>
            <br></br>

            <div>
              <Row>
                <Col span={6}>
                  <Select
                    value={StepUtente.FrequenzaAcquisto}
                    name="FrequenzaAcquisto"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        FrequenzaAcquisto: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={StepUtente.FrequenzaOnline}
                    name="FrequenzaOnline"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepUtente,
                        FrequenzaOnline: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={StepUtente.FrequenzaNegozio}
                    name="FrequenzaNegozio"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setStepUtente({
                        ...StepActions,
                        FrequenzaNegozio: value
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Giorni da ultimo acquisto</Col>
                <Col span={6}>Giorno da ultimo accesso in negozio</Col>
                <Col span={6}>Giorni da ultimo accesso online</Col>
              </Row>
              <br></br>

              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={StepUtente.UltimoAcquisto}
                      name="UltimoAcquisto"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setStepUtente({
                          ...StepUtente,
                          UltimoAcquisto: value
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={StepUtente.AccessoNegozio}
                      name="AccessoNegozio"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setStepUtente({
                          ...StepUtente,
                          AccessoNegozio: value
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={StepUtente.AccessoOnline}
                      name="AccessoOnline"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setStepUtente({
                          ...StepUtente,
                          AccessoOnline: value
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <br></br>
              <p></p>
              <Row>
                <Col span={6}>Fascia importo acquisto medio</Col>
              </Row>
              <br></br>

              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={StepUtente.FasciaImporto}
                      name="FasciaImporto"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setStepUtente({
                          ...StepUtente,
                          FasciaImporto: value
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
          <div>
            <Card title="Negozio Favorito" style={{ width: 1600 }}>
              <div>
                <Row>
                  <Col span={6}>
                    <Radio.Group
                      value={StepUtente.Negozio}
                      name="Negozio"
                      defaultValue="Italia"
                      options={option}
                      onChange={value => {
                        setStepUtente({
                          ...StepUtente,
                          Negozio: value.target.value
                        });
                      }}
                    ></Radio.Group>
                  </Col>
                </Row>
                <br></br>
                <p></p>
                <div>
                  <Row>
                    <Col span={6}>Nazione</Col>
                    <Col span={6}>Tipologia POS</Col>
                    <Col span={6}>POS</Col>
                  </Row>
                </div>
                <br></br>
                <div>
                  <Row>
                    <Col span={6}>
                      <Select
                        value={StepUtente.NazioneNegozio}
                        name="NazioneNegozio"
                        defaultValue="Italia"
                        style={{ width: 160 }}
                        onChange={value => {
                          setStepUtente({
                            ...StepUtente,
                            Nazione: value
                          });
                        }}
                      >
                        <Option value="Italia">Italia</Option>
                        <Option value="Altro">Altro</Option>
                      </Select>
                    </Col>
                    <Col span={6}>
                      <Select
                        value={StepUtente.TipologiaPOS}
                        name="TipologiaPOS"
                        defaultValue="Boutique"
                        style={{ width: 160 }}
                        onChange={value => {
                          setStepUtente({
                            ...StepUtente,
                            TipologiaPOS: value
                          });
                        }}
                      >
                        <Option value="Boutique">Boutique</Option>
                        <Option value="Altro">Altro</Option>
                      </Select>
                    </Col>
                    <Col span={6}>
                      <Select
                        value={StepUtente.POS}
                        name="POS"
                        defaultValue="sanGiovanni"
                        style={{ width: 160 }}
                        onChange={value => {
                          setStepUtente({
                            ...StepUtente,
                            POS: value
                          });
                        }}
                      >
                        <Option value="sanGiovanni">
                          Piazza San Giovanni, 17
                        </Option>
                        <Option value="Altro"> Altro</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <p></p>
                <Row>
                  <Col span={6}>Condizione Temporale</Col>
                  <Col span={6}>Tipologia POS</Col>
                </Row>
              </div>
              <br></br>
              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={StepUtente.CondizioneTemp}
                      name="CondizioneTemp"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setStepUtente({
                          ...setStepUtente,
                          CondizioneTemp: value
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={StepUtente.Tipo}
                      name="Tipo"
                      defaultValue="Camerino"
                      style={{ width: 160 }}
                      onChange={value => {
                        setStepUtente({
                          ...StepUtente,
                          Tipo: value
                        });
                      }}
                    >
                      <Option value="Camerino">Camerino</Option>
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
                <Link to="/StepLocation">
                  <Button>Indietro</Button>
                </Link>
              </Col>
              <Col span={6}></Col>
              <Col span={6}></Col>

              <Col span={6}>
                <Link to="/StepActions">
                  <Button onClick={onChange}>Avanti</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
