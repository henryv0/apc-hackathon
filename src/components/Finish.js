import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

import FlatButton from 'material-ui/FlatButton';

import Checkbox from 'material-ui/Checkbox';

export default class Finish extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{width: 380, maxWidth: 700, margin: 'auto'}}>
      	<p>You have applied for 2 grants</p>
      	<p><b>National Disaster Recovery Payment</b></p>
      	<p>Applied 13 August 2017</p>
      	<p>Application Status</p>
      	<div style={{width: 380, maxWidth: 380}}>
        	<Stepper activeStep={stepIndex}>
          	<Step>
            	<StepLabel>Submitted</StepLabel>
          	</Step>
			<Step>
            	<StepLabel>Approved</StepLabel>
          	</Step>
          	<Step>
            	<StepLabel>Paid</StepLabel>
          	</Step>
          	<Step>
            	<StepLabel>  </StepLabel>
          	</Step>
        	</Stepper>
      	</div>
      	<p><b>NSW Natural Disaster Relief Scheme</b></p>
     	<p>Applied 13 August 2017</p>
      	<p>Application Status</p>
     	<div style={{width: 380, maxWidth: 380}}>
			<Stepper activeStep={stepIndex}>
          	<Step>
            	<StepLabel>Submitted</StepLabel>
          	</Step>
			<Step>
            	<StepLabel>Approved</StepLabel>
          	</Step>
          	<Step>
            	<StepLabel>Paid</StepLabel>
          	</Step>
          	<Step>
            	<StepLabel>  </StepLabel>
          	</Step>			
          	</Stepper>
		</div>
      </div>
    );
  }
}

