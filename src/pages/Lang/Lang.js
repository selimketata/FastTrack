import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import France from "./Assets/fr.svg";
import Tunisia from "./Assets/tn.svg";
import { useTranslation} from "react-i18next";


const countries = [
    {
        label: "France",
        src: France,
        link: " ",
        value: "fr"
    },
    {
        label: "Tunsia",
        src: Tunisia,
        link: " ",
        value: "tn"
    }
];

const useStyles = makeStyles(theme => ({
    button: {
        display: "block",
        marginTop: theme.spacing(2)
    },
    select: {
        textAlign: "center",
        textDecoration: "none"
    }
}));

export default function Lang() {
    const { i18n } = useTranslation();

    const classes = useStyles();

    const [country, setCountry] = React.useState(France);
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setCountry(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

    return (
        <Select
            disableUnderline
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={country}
            name="country"
            onChange={handleChange}
            inputProps={{
                id: "open-select"
            }}
        >
            {countries.map((option, key) => (
                <MenuItem value={option.src} key={key} onClick={() => changeLanguage(option.value)}>
                    <img src={option.src} alt={option.label} width="30px" />{" "}
                </MenuItem>
            ))}
        </Select>
    );
}
