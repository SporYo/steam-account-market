import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleMediaCard from '../../components/Сard';
import Grid from '@material-ui/core/Grid';

const Container = styled.div `
  background-color: #9E9E9E;
  position:fixed;
  top:0;
  left:0;
  min-width:100%;
  min-height:100%;
`

const Main = styled.div `
  margin-left: auto;
  margin-right: auto;
  
`


class Feed extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default Feed;
