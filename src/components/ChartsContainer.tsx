import {v4} from 'uuid';
import Container from "@mui/material/Container";
import { getFluxQueryOptions } from "../types";
import ChartCard from "./ChartCard";
interface ChartsContainerProps {
  charts: getFluxQueryOptions[];
}

export const ChartsContainer = ({ charts }: ChartsContainerProps) => {
  return (
    <Container>
      {charts.map((ch) => (
        <ChartCard {...ch} key={v4()} />
      ))}
    </Container>
  );
};
export default ChartsContainer