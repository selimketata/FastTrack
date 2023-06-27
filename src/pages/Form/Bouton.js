import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkout from "./Checkout"
import { Trans } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    //bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 20,
    p: 1,
};


const useStyles = makeStyles({
    flexGrow: {
        flex: '1',
    },
    button: {
        backgroundColor: '#3c52b2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#E23E57',
        },
    },
      typo: {
        flexGrow: 1,
        textAlign: "center"
      }
})

export default function Bouton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles()


    return (
        <div>
            {/*<Button color="inherit" onClick={handleOpen}><Trans i18nKey="Devis">trans</Trans></Button>*/}
            <Button onClick={handleOpen} fullWidth variant="contained" className={classes.button}>
            <Trans i18nKey="Devis">trans</Trans></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Checkout />
                </Box>
            </Modal>
        </div>
    );
}