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

export default class Confirm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: 1};
  // }

  state = {
    finished: false,
    value: 1,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  handleChange = (event, index, value) => this.setState({value});

  fetchInfoData() {
    fetch('https://apc.openbankproject.com/obp/v3.0.0/banks/au.01.aum.anz/customers', {
      method: 'GET',
      headers: {
        'Authorization': 'DirectLogin token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIiOiIifQ.GJQMOaeIXFN6Q6K_a-WyxOlZFs3HxUC4sth9MAJUV7o"'
      }
    })
    .then((response) => response.json())
    .then((json) => {
      // json.customers
      console.log(json.customers);      
    })
    .catch((err) => {
      console.log(err)
    })
  }

  fetchLocationData() {
    fetch('https://apc.openbankproject.com/obp/v3.0.0/banks/au.01.aum.anz/accounts/4b0ad35f-b576-4045-af6a-9ec1a68f9115/owner/transactions', {
      method: 'GET',
      headers: {
        'Authorization': 'DirectLogin token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIiOiIifQ.GJQMOaeIXFN6Q6K_a-WyxOlZFs3HxUC4sth9MAJUV7o"'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const locations = json.transactions.map(function(trans) {
          if (trans.metadata.where) {
            return trans.metadata.where
          } 
          else {
            return;
          }
        })
        // console.log(json);
        // console.log(locations);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // fetch


  render() {
    this.fetchInfoData();

    // return (

    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Your details</StepLabel>
            <StepContent>
              <div>
                {/* <AppBar title="Your Details"/> */}
                <div style={{ padding: '1em' }}>
                  <TextField defaultValue="Anil.Anz.01" floatingLabelText="Legal name" fullWidth={true}/><br />
                  <DatePicker hintText="DOB" fullWidth={true} defaultDate={new Date()} floatingLabelText="Date of Birth"/>
                  <TextField defaultValue="6112349876" floatingLabelText="Mobile number" fullWidth={true} type="number"/><br />
                  <TextField defaultValue="123 Road Street, Suburb NSW 2000" floatingLabelText="Address" fullWidth={true}/><br />
                  <TextField defaultValue="(-37.5793,142.4157)" floatingLabelText="Coordinates" fullWidth={true}/><br />
                  
                  {/*<br />

                   <span>Where do you want your payments made?</span><br /> */}

                  {/* <DropDownMenu onChange={this.handleChange} 
                  style={{width: '100%', padding: '0'}} 
                  //autoWidth={false} 
                  >
                    <MenuItem value={1} primaryText="ANZ" />
                    <MenuItem value={2} primaryText="CBA" />
                    <MenuItem value={3} primaryText="NAB" />
                    <MenuItem value={4} primaryText="Westpac" />
                   </DropDownMenu><br/><br />  */}
                  {/* <RaisedButton label="Next" /> */}
                </div>
              </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Disaster Details</StepLabel>
            <StepContent>
              <p>Which disaster were you affected by?</p>
              <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Bushfire" />
                <MenuItem value={2} primaryText="Flood" />
                <MenuItem value={3} primaryText="Storm" />
              </DropDownMenu>

              <p>Date you were affected by the disaster</p>
              <DatePicker hintText="DOB" fullWidth={true} defaultDate={new Date()}/>

              <p>How were you directly affected by the disaster?</p>
              <Checkbox
                label="Immediate family member has died or is missing"
              />
              <Checkbox
                label="I was seriously injured"
              />
              <Checkbox
                label="Dependent(s) were seriously injured"
              />
              <br/>

              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Government Assistance</StepLabel>
            <StepContent>
              <p>You are eligible for these grants: </p>


              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Bank Assistance</StepLabel>
            <StepContent>
              <p>Relief packages available to you: </p>

              
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            {/* <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example. */}
          </p>
        )}
      </div>
    
    );
  }
}