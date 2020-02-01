import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => (
  <>
    <h1>Number of ice creams {numOfIceCreams}</h1>
    <button onClick={buyIceCream}>Buy one ice cream</button>
  </>
);

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer);
