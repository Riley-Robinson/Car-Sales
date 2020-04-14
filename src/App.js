import React from 'react';

import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature } from './actions/AddFeatures';
import { removeFeature } from './actions/RemoveFeatures';

const App = props => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div classNAme="box">
        <AddedFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
        <Total car= {props.car} additionalPrices={props.additionalPrice} />
      </div>
    </div>
  );
};

      const stateToProps = state => {
        return{
          additionalPrice: state.additionalPrice,
          car: state.car,
          additionalFeatures: state.additionalFeatures
        }
      }


  export default connect (
      stateToProps,
      { addFeature, removeFeature }
  )(App);