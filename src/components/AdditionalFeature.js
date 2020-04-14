

import React, { useEffect } from 'react';
import { addItem } from "../actions/actions"
import { connect } from "react-redux";

    const AdditionalFeature = props => {

      return(
        <li>
          <button className="button" onClick= {(e) =>
           { console.log("Adding item ",
            props.feature.id + " " + props.feature.name);
             e.preventDefault(); props.dispatch(props.feature)}}
             >Add</button>
            {props.feature.name} (+{props.feature.price})
        </li>
      );
    };

    const mapDispatchToProps = (dispatch) => {
      return{
        dispatch: (item) => dispatch(addItem(item))
      }
    }

export default connect(
  null, mapDispatchToProps
)(AdditionalFeature);
