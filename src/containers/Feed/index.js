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

const StyledCard = styled(Card)`
        width: 345px;
        margin: 16px;
        color: red;
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
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
                {this.state.accounts && this.state.accounts.map(account => <StyledCard key={Math.random()}>
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
                </StyledCard>)}
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Feed;
