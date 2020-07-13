import React, { Component } from "react";
import { carData } from './carData';
import "./App.css";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  empty = (e) => {
    if(e === undefined)
      return true;
    
    switch (e) {
      case "":
      case 0:
      case "0":
      case null:
      case false:
      case typeof(e) === "undefined":
        return true;
      default:
        return false;
    }
  }

  displayFilters = (x) => {
    let item = [];

    item.push(<div key='make'>Make: {x.make}</div>);
    item.push(<div key='year'>Year: {x.year}</div>)

    if((x.color.toLowerCase() === this.state.fields.color)) {
        item.push(<div key='color'>Color: {x.color}</div>)
    }

    if(!this.empty(this.state.fields.sunRoof) || this.state.fields.sunRoof === x.hasSunroof.toString()) {
      item.push(<div key='sunRoof'>Sun Roof: {x.hasSunroof.toString()}</div>)
    }

    if(!this.empty(this.state.fields.fourWheelDrive) || this.state.fields.fourWheelDrive === x.isFourWheelDrive.toString()) {
      item.push(<div key='fourWheelDrive'>Is a four wheel drive: {x.isFourWheelDrive.toString()}</div>)
    }

    if(!this.empty(this.state.fields.lowMiles) || this.state.fields.lowMiles === x.hasLowMiles.toString()) {
      item.push(<div key='lowMiles'>Has low miles: {x.hasLowMiles.toString()}</div>)
    }

    if(!this.empty(this.state.fields.powerWindows) || this.state.fields.powerWindows === x.hasPowerWindows.toString()) {
      item.push(<div key='powerWindows'>Power Windows: {x.hasPowerWindows.toString()}</div>)
    }

    if(!this.empty(this.state.fields.navigation) || this.state.fields.navigation === x.hasNavigation.toString()) {
      item.push(<div key='navigation'>Navigation: {x.hasNavigation.toString()}</div>)
    }

    if(!this.empty(this.state.fields.heatedSeats) || this.state.fields.heatedSeats === x.hasHeatedSeats.toString()) {
      item.push(<div key='heatedSeats'>Heated Seats: {x.hasHeatedSeats.toString()}</div>)
    }

    return item;
  }

  filterCar = (x) => {

    return (this.state.fields.color === x.color.toLowerCase()
    && (this.empty(this.state.fields.sunRoof) || this.state.fields.sunRoof === x.hasSunroof.toString())
    
    );
  }

  displayCars = () => {

    // var filteredCars = carData.filter(x => this.filterCar(x));

    var filteredCars = carData.filter(x => (
      (this.empty(this.state.fields.color) || this.state.fields.color === x.color.toLowerCase())
      && (this.empty(this.state.fields.sunRoof) || this.state.fields.sunRoof === x.hasSunroof.toString())
      && (this.empty(this.state.fields.fourWheelDrive) || this.state.fields.fourWheelDrive === x.isFourWheelDrive.toString())
      && (this.empty(this.state.fields.lowMiles) || this.state.fields.lowMiles === x.hasLowMiles.toString())
      && (this.empty(this.state.fields.powerWindows) || this.state.fields.powerWindows === x.hasPowerWindows.toString())
      && (this.empty(this.state.fields.navigation) || this.state.fields.navigation === x.hasNavigation.toString())
      && (this.empty(this.state.fields.heatedSeats) || this.state.fields.heatedSeats === x.hasHeatedSeats.toString())
    ));

    console.log('filteredCars', filteredCars);

    return (
      filteredCars.map((x, index) => (
        <div style={{margin: '20px'}} key={index}>
          {this.displayFilters(x)}
        </div>
    )))
  }

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <h1>
          Available Cars to choose from
        </h1>
        {this.displayCars()}
      </div>
    );
  }
}

export default App;