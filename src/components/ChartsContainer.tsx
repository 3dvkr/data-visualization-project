import Container from "@mui/material/Container";
import { getFluxQueryOptions } from "../types";
import ChartCard from "./ChartCard";

interface ChartsContainerProps {
  charts: getFluxQueryOptions[];
}
export const ChartsContainer = ({ charts }: ChartsContainerProps) => {
  return (
    <Container>
      {charts.map((ch, i) => (
        <ChartCard {...ch} key={i} />
      ))}
    </Container>
  );
};
export default ChartsContainer