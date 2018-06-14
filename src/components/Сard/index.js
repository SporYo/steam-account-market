import React, {
  Component
} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Wraper = styled.div `
  background-color: rgb(42, 40, 49) ;
  border-bottom-left-radius: 8px ;
  border-bottom-right-radius: 8px ;
  border-top-left-radius: 8px ;
  border-top-right-radius: 8px ;
  box-shadow: rgba(0, 0, 0, 0) 0px 6px 10px 0px ;
  box-sizing: border-box ;
  cursor: pointer ;
  display: block ;
  font-family: "YS Text", Arial, Helvetica, sans-serif ;
  height: 400.391px ;
  margin-bottom: 8px ;
  margin-left: 8px ;
  margin-right: 8px ;
  margin-top: 8px ;
  max-height: 432px ;
  max-width: 380px ;
  min-height: 288px ;
  position: relative ;
  transform: matrix(1, 0, 0, 1, 0, 0) ;
  transition-delay: 0s ;
  transition-duration: 0.3s ;
  transition-property: box-shadow ;
  transition-timing-function: ease ;
  width: 320px ;
  -webkit-font-smoothing: antialiased
;
`
const Title = styled.div`
box-sizing: border-box ;
 color: rgb(0, 0, 0) ;
 cursor: pointer ;
 display: -webkit-box ;
 flex-basis: auto ;
 flex-grow: 0 ;
 flex-shrink: 0 ;
 font-family: "YS Text", Arial, Helvetica, sans-serif ;
 font-size: 36px ;
 font-weight: 700 ;
 height: 119.391px ;
 line-height: 38px ;
 margin-bottom: 5.4px ;
 overflow-x: hidden ;
 overflow-y: hidden ;
 padding-left: 18px ;
 padding-right: 10px ;
 padding-top: 5.4px ;
 text-overflow: ellipsis ;
 user-select: none ;
 white-space: normal ;
 width: 320px ;
 word-break: break-word ;
 word-wrap: break-word ;
 -webkit-box-orient: vertical ;
 -webkit-font-smoothing: antialiased ;
 -webkit-line-clamp: 4 ;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0) ;
`

class Card extends Component {
  render() {
    return (

      <Wraper>
        <Title>Steam account</Title>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Wraper>
      
    );
  }
}

export default Card;