import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'5%'
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    maxWidth: 500,
    backgroundColor:'#2f5a77',
    color:'#fff',
    height:'100%',
    borderRadius:'10px'
  },
  image: {

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item style={{width:'50%',margin:'auto'}}>
            <ButtonBase className={classes.image}>
            <BarChartIcon/>
            </ButtonBase>
          </Grid>
          <Grid item  style={{textAlign:'right', width:'50%'}}>
            <Grid item direction="column">
              <Grid item>
                <Typography gutterBottom>
                  {props.title}
                </Typography>
                <Typography gutterBottom style={{fontSize:'25px'}}>
                  {props.number}
                </Typography>
                <Typography  gutterBottom style={{fontSize:'12px'}}>
                  {props.famous}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
