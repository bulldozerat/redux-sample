import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = ({ numOfCakes, buyCake }) => {
  const [inputVal, setInputVal] = useState(1);
  const getVal = e => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <h1>Number of cakes {numOfCakes}</h1>
      <input placeholder='How many cakes do you want to buy' type='number' value={inputVal} onChange={getVal} />
      <button onClick={() => buyCake(inputVal)}>Buy {inputVal} cakes</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: num => dispatch(buyCake(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer);
