import { useState } from "react";
// import { Header, ChartsContainer, NewChartForm } from "./components";
import { Header, ChartsContainer, Info } from "./components";
import "./App.css";
import { AddChartInput, getFluxQueryOptions } from "./types";
import Button from "@mui/material/Button";

function App() {
  const field = "usage_average";
  const measurement = "vsphere_vm_cpu";
  const moid = "vm-1915";
  const table = `${(moid || "").replace("-", "_")}_${field}_${measurement}`;
  // const [isFormOpen, toggleForm] = useState(false);
  const [charts, setCharts] = useState([
    {
      bucket: "datacenter-capacity-planning",
      moid: moid,
      field: "usage_average",
      measurement: "vsphere_vm_cpu",
      tableId: table,
      datasetId: "resource_planning",
    },
  ]);
  // const handleAddChart = ({ field, target, measurement }: AddChartInput) => {
  //   const newChart: getFluxQueryOptions = {
  //     bucket: "datacenter-capacity-planning",
  //     moid: target,
  //     field: field,
  //     measurement: measurement,
  //     tableId: `${(target || "").replace("-", "_")}_${field}_${measurement}`,
  //     datasetId: "resource_planning",
  //   };
  //   setCharts([...charts, newChart]);
  // };

  return (
    <div className="App">
      <Header />
      {/* <Button
        variant="contained"
        sx={{ marginTop: "calc(100px + 3vw)" }}
        onClick={() => toggleForm(!isFormOpen)}
      >
        +
      </Button> */}
      {/* {(isFormOpen || charts.length) && (
        <NewChartForm onSubmit={handleAddChart} />
      )} */}
      <ChartsContainer charts={charts} />
      <Info />
    </div>
  );
}

export default App;
