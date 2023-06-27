import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Select from "@material-ui/core/Select";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { makeStyles } from "@material-ui/core/styles"
import { Trans } from "react-i18next";

  const useStyles = makeStyles((theme) => ({
    select: {
      '&:before': {
          borderColor: 'white',
      },
      '&:after': {
          borderColor: 'white',
      },
      '&:not(.Mui-disabled):hover::before': {
          borderColor: 'white',
      },
      color:"white",
  },
    icon: { color: "white" },
    //label: { color: "white" },
  }));

export default function BasicSelect() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
      };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-label" className={classes.label}></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Voiture"
                    className={classes.select}
                    inputProps={{
                        classes: {
                            icon: classes.icon,
                            root: classes.root,
                        },
                    }}
                  onChange={handleChange}
                >
                    <MenuItem value={"Voitures/vehicules utilitaires"}> <DirectionsCarIcon/><Trans i18nKey="FormQuestion1Choice1">trans</Trans></MenuItem>
                    <MenuItem value={"Camion/poids lourds"}> <LocalShippingIcon/><Trans i18nKey="FormQuestion1Choice2">trans</Trans></MenuItem>
                    <MenuItem value={"Vehicules de transports de personne"}> <AirportShuttleIcon/><Trans i18nKey="FormQuestion1Choice3">trans</Trans></MenuItem>
                    <MenuItem value={"Engins de chantiers/ engins d'agricole /tracteur.."}> <AgricultureIcon/><Trans i18nKey="FormQuestion1Choice4">trans</Trans></MenuItem>
                    <MenuItem value={"Scooters/motos"}> <TwoWheelerIcon/><Trans i18nKey="FormQuestion1Choice5">trans</Trans></MenuItem>
                    <MenuItem value={"Loisirs (bateaux. Quad camping ..)"}> <DirectionsBoatIcon/><Trans i18nKey="FormQuestion1Choice6">trans</Trans></MenuItem>
                </Select>
            </FormControl>
            
        </Box>
    );
}