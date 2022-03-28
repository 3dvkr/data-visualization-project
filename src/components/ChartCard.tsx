import { Container } from "@mui/material";
import { useState } from "react";
import { useRawQuery,useForecast } from "../hooks";
import { Controls,MainChart } from "../components";

interface ChartProps {
  bucket: string;
  moid: string;
  field: string;
  measurement: string;
  tableId: string;
  datasetId: string;
}
export const ChartCard = (options: ChartProps) => {
  const { data, isFetching, refetch } = useRawQuery(options);
  const {
    data: forecast,
    isFetching: isForecasting,
    refetch: reforecast,
  } = useForecast(options);
  const [window, setWindow] = useState([0, 60] as Array<number>);
  return (
    <Container>
      <MainChart
      chart={options}
        data={data}
        window={window}
        forecast={forecast}
        isFetching={isFetching}
        isForecasting={isForecasting}
      />
      <Controls refetch={refetch} setWindow={setWindow} forecast={reforecast} />
    </Container>
  );
};
export default ChartCard;
