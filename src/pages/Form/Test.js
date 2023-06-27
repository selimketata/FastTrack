import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput as MuiOutlinedInput,
  } from "@material-ui/core";
  import { makeStyles , withStyles} from "@material-ui/core/styles"

  const OutlinedInput = withStyles((theme) => ({
    notchedOutline: {
      borderColor: "white !important",
    },
  }))(MuiOutlinedInput);
  
  const useStyles = makeStyles((theme) => ({
    select: {
      color: "white",
    },
    icon: { color: "white" },
    label: { color: "white" },
  }));
  
  export default function Test() {
    const classes = useStyles()

    return (
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="labelId" className={classes.label}>
          Label
        </InputLabel>
        <Select
          labelId="labelId"
          classes={{
            select: classes.select,
            icon: classes.icon,
          }}
          input={<OutlinedInput label="Label" style={{ color: "#ffffff"}}/>}
        >
          <MenuItem>A</MenuItem>
          <MenuItem>B</MenuItem>
        </Select>
      </FormControl>
    );
  }