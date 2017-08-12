import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});


  render() {
    return (
    //   <Grid fluid>
    //     <Row>
    //       <Col xs={6} md={3}>
    //         Hello, world!
    //       </Col>
    //     </Row>
    //   </Grid>
      <div>
        <AppBar title="Your Details"/>
        <div style={{ padding: '1em' }}>
          <TextField defaultValue="Firstname Lastname" floatingLabelText="Legal name" fullWidth={true}/><br />
          <DatePicker hintText="DOB" fullWidth={true} defaultDate={new Date()} floatingLabelText="Date of Birth"/>
          <TextField defaultValue="6112349876" floatingLabelText="Mobile number" fullWidth={true} type="number"/><br />
          <TextField defaultValue="123 Road Street, Suburb NSW 2000" floatingLabelText="Address" fullWidth={true}/><br /><br />

          <span>Where do you want your payments made?</span><br />

          <DropDownMenu onChange={this.handleChange} 
           style={{width: '100%', padding: '0'}} 
          //autoWidth={false} 
          >
            <MenuItem value={1} primaryText="ANZ" />
            <MenuItem value={2} primaryText="Westpac" />
            <MenuItem value={3} primaryText="CBA" />
            <MenuItem value={4} primaryText="NAB" />
          </DropDownMenu><br/><br />
          <RaisedButton label="Next" />
        </div>
      </div>

    
    );
  }
}