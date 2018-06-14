import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from '../../components/Сard';
import Grid from '@material-ui/core/Grid';




class Feed extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Feed;
