import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../../components/Сard';
import Grid from '@material-ui/core/Grid';




class Feed extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Feed;
