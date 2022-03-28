import axios from "axios";
type FormOptions = {
  id: "measurement" | "field" | "target";
  options: string[];
  label: "Measurement" | "Field" | "Target";
}[];
export async function fetchFormOptions(): Promise<FormOptions> {
  const { data } = await axios.get("http://localhost:8080/options");
  return data as FormOptions;
}
