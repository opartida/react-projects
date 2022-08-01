import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

const TodoItem = ({ id, checked, value, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={() => onChange(id)}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label={
        <label className={`${checked ? "line-through" : ""}`}>{value}</label>
      }
    />
  );
};

export default TodoItem;
