import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item =>
           { console.log("adding more features to do stuff");
           return(

            <AdditionalFeature key={item.id} feature={item} />
          )})}
        </ol>
      ) : (
        <p>ZOOM ZOOM </p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps  
)(AdditionalFeatures);
