import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import withRoot from './withRoot';
import MultipleSelect from './MultipleSelect';
import { object } from 'prop-types';

const deviceNames = [
  "ALL",
  "iPhone 4",
  "iPhone 4S",
  "iPhone 5",
  "Galaxy S3",
  "Galaxy S4",
  "Nexus 4",
  "Droid Razor",
  "Droid DNA",
  "HTC One",
  "iPhone 3",
]

const countries = [
  "ALL",
  "US",
  "GB",
  "JP"
]


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  table: {
    minWidth: 700,
    // maxWidth: 800
  },
});

const ExchangeRates = (props) => (
  <Query
    query={gql`
    {testers(countries: ${JSON.stringify(props.args.countries)}, devices: ${JSON.stringify(props.args.devices)}) {
      uid
      country
      firstName
      lastName
      experience
      devices{
        description
        deviceid
      }
    }}
    `}
  >
    {({ loading, error, data }) => {
      const { classes } = props.props;
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log("args", props.args)
      return (
          <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="center">Devices</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {
                data.testers.map(({uid, firstName, lastName, experience, devices, country}) =>(
                  <TableRow key={uid}>
                    <TableCell component="th" scope="row">
                      {uid}
                    </TableCell>
                    <TableCell align="right">{firstName}</TableCell>
                    <TableCell align="right">{lastName}</TableCell>
                    <TableCell align="right">{country}</TableCell>
                    <TableCell align="right">{experience}</TableCell>
                    <TableCell align="left">
                      <ul>
                        {
                          devices.map(item => (
                          <li>{item.description}</li>
                        ))
                        }
                      </ul>
                    </TableCell>
                  </TableRow>
              ) )
              }
            </TableBody>
          </Table>
      ) 
      
    }}
  </Query>
);

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        countries: ["ALL"],
        devices: ["ALL"]
      };
      this.deviceCallback = this.deviceCallback.bind(this)
      this.CountryCallback = this.CountryCallback.bind(this)
    }
  
  deviceCallback(devices) {
    console.log('triggered')
    this.setState({devices: devices})
  }
  CountryCallback(countries) {
    this.setState({countries: countries})
  }
  render() {
  const { classes } = this.props;
    return (     
      
            <div className={classes.root}>
              <MultipleSelect items={deviceNames} label="Devices" callback={this.deviceCallback}/>
              <MultipleSelect items={countries} label="Countries" callback={this.CountryCallback} />
              <ExchangeRates props={this.props} args={this.state}/>
            </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
