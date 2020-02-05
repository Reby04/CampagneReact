import React, { useState } from "react";
import { Select } from "antd";
import { Table, Button } from "antd";
import { Link } from "@reach/router";

export const Home = ({ dataVar }) => {
  const { Column } = Table;
  const { Option } = Select;
  const [Home, setHome] = useState({
    Campagne: ""
  });

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ textAlign: "left", paddingLeft: 200 }}>Elenco Campagne</p>
        <div>
          <Select
            name="Campagne"
            defaultValue="Tutte le campagne"
            style={{ width: 1000 }}
            onChange={value => {
              setHome({
                ...Home,
                Campagne: value
              });
            }}
          >
            <Option value="Campagna 1">Campagna 1</Option>
            <Option value="Campagna 2">Campagna 2</Option>
            <Option value="Campagna 3">Campagna 3</Option>
          </Select>

          <Table style={{ width: 1460, paddingLeft: 460 }}>
            <Column
              title="Nome Campagna"
              dataIndex="NomeCampagna"
              key="NomeCampagna"
            />
            <Column title="Autore" dataIndex="Autore" key="Autore" />
            <Column title="Profilo" dataIndex="Profilo" key="Profilo" />
            <Column title="Stato" dataIndex="Stato" key="Stato" />
            <Column
              title="Azione"
              dataIndex=""
              key="Azione"
              onChange={() => <a href={"http://google.com"}>Visualizza</a>}
            />
          </Table>
          <Link to="/NuovaCampagna">
            <Button>Nuova Campagna</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};
