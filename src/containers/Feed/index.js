import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import AddItemForm from "../AddItemForm";
import {CircularProgress} from "@material-ui/core/";

const StyledCard = styled(Card)`
    width: 345px;
    margin: 16px;
    color: red;
`;

const StyledAddButtonWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const StyledProgressWrapper = styled.div`
  position: fixed;
  top: 50%;
`;

class Feed extends Component {

  database = null;
  constructor(props) {
    super(props);
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAy4Lv9m6-7GDInq2m3Jxw7BhqR49GFa-0",
        authDomain: "steam-account-marketplace-test.firebaseapp.com",
        databaseURL: "https://steam-account-marketplace-test.firebaseio.com",
        projectId: "steam-account-marketplace-test",
        storageBucket: "steam-account-marketplace-test.appspot.com",
        messagingSenderId: "285545708506",
    };
    this.database = firebase.initializeApp(config).firestore();
    this.database.settings({timestampsInSnapshots: true});
    this.state = {accounts: []}
  }

  componentDidMount() {
    this.database.collection('accounts').get().then(querySnapshot => {
        console.log(querySnapshot);
        this.setState({accounts: querySnapshot.docs.map(doc => doc.data())});
    })
  }
  render() {
    return (
        <Grid container spacing={16}>
            <StyledAddButtonWrapper>
                <Button onClick={() => this.setState({addItemPopupOpen: true})} variant="fab" color="primary" aria-label="add">
                    <AddIcon />
                </Button>
                <AddItemForm open={this.state.addItemPopupOpen} handleClose={() => this.setState({addItemPopupOpen: false})}/>
            </StyledAddButtonWrapper>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>

                {this.state.accounts.length ? this.state.accounts.map(account => <StyledCard key={Math.random()}>
                    <CardMedia
                        image="http://www.kartinkijane.ru/pic/201305/1366x768/kartinkijane.ru-30552.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {account.title}
                        </Typography>
                        <Typography component="p">
                            {account.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </StyledCard>)
                : <StyledProgressWrapper><CircularProgress size={50} /></StyledProgressWrapper>}
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Feed;
