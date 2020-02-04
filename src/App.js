import React from "react";
import { Home } from "./Home";
import { Router } from "@reach/router";
import { NuovaCampagna } from "./NuovaCampagna";
import { StepTempo } from "./StepTempo";
import { StepLocation } from "./StepLocation";
import { StepUtente } from "./StepUtente";
import { StepActions } from "./StepActions";

function App() {
  const data = [
    {
      NomeCampagna: "Coap",
      Autore: "hjk",
      profilo: "hjk"
    }
  ];

  return (
    <Router>
      <Home path="/" dataVar={data}></Home>
      <NuovaCampagna path="/NuovaCampagna"></NuovaCampagna>
      <StepTempo path="/StepTempo"></StepTempo>
      <StepLocation path="/StepLocation"></StepLocation>
      <StepUtente path="/StepUtente"></StepUtente>
      <StepActions path="/StepActions"></StepActions>
    </Router>
  );
}

export default App;
