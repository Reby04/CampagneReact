import React from 'react';
import { Select } from 'antd';
import { Table, Button } from 'antd';
import { Link } from "@reach/router" 

 

export const Home = ({dataVar}) => {

    const {Column} = Table
    const {Option} = Select


function handleChange(value) {
    console.log(`selected ${value}`);
  }

    return (
        <div className="App" >
          <header className="App-header">
            <p style={{textAlign: 'left'}}>Elenco Campagne</p>
            <div>
                <Select 
                  defaultValue="Tutte le campagne" 
                  style={{ width: 1000}} 
                  onChange={handleChange}>
                  <Option value="Campagna 1">Campagna 1</Option>
                  <Option value="Campagna 2">Campagna 2</Option>
                  <Option value="Campagna 3">Campagna 3</Option>
                </Select>
                <Table >
                   <Column  title="Nome Campagna" dataIndex="NomeCampagna" key="NomeCampagna" /> 
                   <Column  title="Autore" dataIndex="Autore" key="Autore" />
                   <Column  title="Profilo" dataIndex="Profilo" key="Profilo" />
                   <Column  title="Stato" dataIndex="Stato" key="Stato" />
                   <Column  title="Azione" dataIndex="Azione" key="Azione" >
                    </Column>
                </Table>
               <Link to="/App"><Button>Nuova Campagna</Button></Link> 
                </div>
          </header>
        </div>
      );
    }
  