import  TextField  from "@mui/material/TextField";
import  Button from "@mui/material/Button";
import  Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "react-query";
import FormGroup from "@mui/material/FormGroup";
import { fetchFormOptions } from "../api";
import { useState } from "react";
import { AddChartInput } from "../types";
interface NewChartFormProps {
  onSubmit: (form: AddChartInput) => void;
}
export const NewChartForm = ({ onSubmit }: NewChartFormProps) => {
  const { data: formFields } = useQuery("options", fetchFormOptions);
  const [formState, setFormState] = useState({
    target: "",
    measurement: "",
    field: "",
  } as AddChartInput);
  return (
    <FormGroup >
      {formFields &&
        formFields.map(({ id, options, label }) => (
          <Autocomplete
            disablePortal
            id={id}
            options={options}
            sx={{ width: 300 }}
            onChange={(e,v)=>setFormState((prev) => {
                return { ...prev, [id]: v };
              })}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
              />
            )}
            value={formState[`${id}`]}
          />
        ))}
        <Button type="submit" variant="contained" onClick={() => onSubmit(formState)}>Submit</Button>
    </FormGroup>
  );
};
export default NewChartForm;
