import React from "react";

export default class Form extends React.Component {
  state = {
    color: "",
    sunRoof: "",
    fourWheelDrive: "",
    lowMiles: "",
    powerWindows: "",
    navigation: "",
    heatedSeats: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      color: "",
      sunRoof: "",
      fourWheelDrive: "",
      lowMiles: "",
      powerWindows: "",
      navigation: "",
      heatedSeats: ""
    });

    this.props.onChange({
      color: "",
      sunRoof: "",
      fourWheelDrive: "",
      lowMiles: "",
      powerWindows: "",
      navigation: "",
      heatedSeats: ""
    });


  };

  render() {
    return (
      <form>
        <label>
          Color:
        </label>
        <select name='color' value={this.state.color} onChange={e => this.change(e)}>
          <option value="" />
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="silver">Silver</option>
          <option value="black">Black</option>
        </select>
        <br />
        <label>
          Sun Roof:
        </label>
        <select name='sunRoof' value={this.state.sunRoof} onChange={e => this.change(e)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          4 wheel drive:
        </label>
        <select name='fourWheelDrive' value={this.state.fourWheelDrive} onChange={e => this.change(e)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Low Miles:
        </label>
        <select name='lowMiles' value={this.state.lowMiles} onChange={e => this.change(e)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Power Windows:
        </label>
        <select name='powerWindows' value={this.state.powerWindows} onChange={e => this.change(e)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Navigation:
        </label>
        <select name='navigation' value={this.state.navigation} onChange={e => this.change(e)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Heated Seats:
        </label>
        <select name='heatedSeats' value={this.state.heatedSeats} onChange={e => this.change(e)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <button onClick={e => this.onSubmit(e)}>Clear</button>
      </form>
    );
  }
}