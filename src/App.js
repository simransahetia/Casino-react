import React from 'react'
import styled from 'styled-components'
import Grid from "@material-ui/core/Grid";

import SlotMachine from './container/SlotMachine'
import SignIn from "./Dialog.js";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StickyFooter from './container/Footer'
import CustomizedTables from './Tabel'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ArrowLeft } from '@material-ui/icons';

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="white" onClick={handleClickOpen}>
        LOGIN
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          < SignIn />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}


 




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(0),
    
  },
  logo: {
    width: 135,
    
    height: 43.54
  }
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
        <Grid style={{ justifySelf: "flex-start" }} item>
              <img
                className={classes.logo}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                }
                alt="Bosch Logo"
              />
            </Grid>
            
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Online Casino
          </Typography>
          <FormDialog />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const Page = styled.div`
  width: 100%;
  margin: 10px auto;
  text-align: center;
`

const App = props => (
  
    
    
  
  <Page>
    <ButtonAppBar />
    <SlotMachine />
    <Typography component="h1" variant="h5">
          Game Results
        </Typography>
    <CustomizedTables />
    <StickyFooter />
  </Page>
)

export default App
