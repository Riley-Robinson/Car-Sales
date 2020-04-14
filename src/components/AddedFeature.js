import React from 'react';
import {removeItem} from "../actions/actions.js"
import { connect } from "react-redux";

const AddedFeature = props => {
            if(!props.feature) return <p>IDK</p>;
            return (
              <li> 
              <button className="button" 
              onClick= {(e) => 
              {console.log("onclick remove");
                e.preventDefault(); 
                props.dispatch(props.feature)
                }}>XXX</button>
              {props.feature.name}
            </li>
          );
         };
const mapDispatchToProps = (dispatch) => {
            return {
              dispatch: (item) => dispatch(removeItem(item))
            }
          }

          export default connect(
            null, mapDispatchToProps
)(AddedFeature); 