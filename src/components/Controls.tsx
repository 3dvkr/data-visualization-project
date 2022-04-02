import {v4} from 'uuid';

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

interface ControlsProps {
  refetch: () => void;
  setWindow: React.Dispatch<React.SetStateAction<number[]>>;
  forecast: ()=>void
}
export function Controls({ refetch, setWindow, forecast }: ControlsProps) {
  const sizes = ["1h", "12h", "1d"];
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    size: string
  ) => {
    switch (size) {
      case "1h": {
        setWindow((prev) => [prev[0], prev[0] + 60]);
        break;
      }
      case "12h": {
        setWindow((prev) => [prev[0], prev[0] + 60 * 12]);
        break;
      }
      case "1d": {
        setWindow((prev) => [prev[0], prev[0] + 60 * 26]);
        break;
      }
      case "7d": {
        setWindow((prev) => [prev[0], prev[0] + 60 * 24 * 7]);
        break;
      }
      case "30d": {
        setWindow((prev) => [prev[0], prev[0] + 60 * 24 * 30]);
        break;
      }
    }
  };
  return (
    <Container>
      {/* <Button variant="contained" onClick={refetch}>
        Refetch
      </Button> */}
      {sizes.map((element) => (
        <Button key={v4()} variant="contained" onClick={(event) => handleClick(event, element)}>
          {element}
        </Button>
      ))}
      {/* <Button variant="contained" onClick={forecast}>Forecast</Button> */}
    </Container>
  );
}
