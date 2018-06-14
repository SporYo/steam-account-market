import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleMediaCard from '../../components/Сard';
import Grid from '@material-ui/core/Grid';

const Main = styled.div `
background-color: #9E9E9E;
`


class Feed extends Component {
  render() {
    return (
      <Main>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
              <SimpleMediaCard></SimpleMediaCard>
            </Grid>
          </Grid>
        </Grid>
      </Main>
    );
  }
}

export default Feed;
