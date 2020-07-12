import React, { useState } from 'react';
import {carData} from './carData';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [sunRoof, setSunRoof] = useState('');
  const [fourWheelDrive, setFourWheelDrive] = useState('');
  const [lowMiles, setLowMiles] = useState('');
  const [powerWindows, setPowerWindows] = useState('');
  const [navigation, setNavigation] = useState('');
  const [heatedSeats, setHeatedSeats] = useState('');
  const [cars, setCars] = useState([]);

  const filterColor = (x) => {
    if(color !== '') {
      return x.color.toLowerCase() === color;
    } else {
      return x;
    }
  }

  const filterSunRoof = (x) => {
    if(sunRoof !== '') {
      return x.hasSunroof === (sunRoof === 'true');
    } else {
      return x;
    }
  }

  const filterFourWheelDrive = (x) => {
    if(fourWheelDrive !== '') {
      return x.isFourWheelDrive === (fourWheelDrive === 'true');
    } else {
      return x;
    }
  }

  const filterLowMiles = (x) => {
    if(lowMiles !== '') {
      return x.lowMiles === (lowMiles === 'true');
    } else {
      return x;
    }
  }

  const filterPowerWindows = (x) => {
    if(powerWindows !== '') {
      return x.hasPowerWindows === (powerWindows === 'true');
    } else {
      return x;
    }
  }

  const filterNavigation = (x) => {
    if(navigation !== '') {
      return x.hasNavigation === (navigation === 'true');
    } else {
      return x;
    }
  }

  const filterHeatedSeats = (x) => {
    if(heatedSeats !== '') {
      return x.hasHeatedSeats === (heatedSeats === 'true');
    } else {
      return x;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const result = carData.filter(x => (
      filterColor(x) &&
      filterSunRoof(x) &&
      filterFourWheelDrive(x) &&
      filterLowMiles(x) &&
      filterPowerWindows(x) &&
      filterNavigation(x) &&
      filterHeatedSeats(x)
    ));

    setCars(result);
  }

  const displayCars = () => {
    return cars.map((x, index) => (
      <div key={index}>
        {x.make}
      </div>
    ))
  }

  return (
    <div className="App">
      <form>
        <label>
          Color:
        </label>
        <select name='color' value={color} onChange={e => setColor(e.target.value)}>
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
        <select name='sun-roof' value={sunRoof} onChange={e => setSunRoof(e.target.value)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          4 wheel drive:
        </label>
        <select name='four-wheel-drive' value={fourWheelDrive} onChange={e => setFourWheelDrive(e.target.value)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Low Miles:
        </label>
        <select name='low-miles' value={lowMiles} onChange={e => setLowMiles(e.target.value)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Power Windows:
        </label>
        <select name='power-windows' value={powerWindows} onChange={e => setPowerWindows(e.target.value)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Navigation:
        </label>
        <select name='navigation' value={navigation} onChange={e => setNavigation(e.target.value)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <label>
          Heated Seats:
        </label>
        <select name='heated-seats' value={heatedSeats} onChange={e => setHeatedSeats(e.target.value)}>
          <option value={undefined} />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <button onClick={(e) => onSubmit(e)}>Submit</button>
      </form>
      {displayCars()}
    </div>
  );
}

export default App;
