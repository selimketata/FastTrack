import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Select from "@material-ui/core/Select";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RoomIcon from '@mui/icons-material/Room';
import SosIcon from '@mui/icons-material/Sos';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { makeStyles } from "@material-ui/core/styles"
import { Trans } from "react-i18next";
import Checkmarks from "./Checkmarks"

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

export default function BasicSelect2() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
      };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
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
                onChange={handleChange}>
                    <MenuItem value={"Pack Gold"}> <EmojiEventsIcon/><Trans i18nKey="FormQuestion2Choice1">trans</Trans></MenuItem>
                    <MenuItem value={"Pack Silver"}> <MilitaryTechIcon/><Trans i18nKey="FormQuestion2Choice2">trans</Trans></MenuItem>
                    <MenuItem value={"Produit Gestion De Park"}> <LocalParkingIcon/><Trans i18nKey="FormQuestion2Choice3">trans</Trans></MenuItem>
                    <MenuItem value={"Produit GPS"}> <RoomIcon/><Trans i18nKey="FormQuestion2Choice4">trans</Trans></MenuItem>
                    <MenuItem value={"Produit Boutton SOS"}> <SosIcon/><Trans i18nKey="FormQuestion2Choice5">trans</Trans></MenuItem>
                    <MenuItem value={"Produit Identification Du Chauffeur"}> <DirectionsCarIcon/><Trans i18nKey="FormQuestion2Choice5">trans</Trans></MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}