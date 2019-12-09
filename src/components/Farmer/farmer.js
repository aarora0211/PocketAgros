import React, { Component } from 'react';
import Card from './card';
import './farmer.css';
import Loader from 'react-loader-spinner';

import farmerBackground from './assets/background.png';

let farmerBack = {
  backgroundImage: `url(${farmerBackground})`
};

class Farmer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Area: '',
          City: '',
          State: '',
          Zip: '',
          Soil: '',
          Start: '',
          End: '',
          Price: '',
          Image: '',
          info: [{Area: "10000", City: "Seattle", State: "WA", Zip: "98105", Soil: "Silty", Start: "10/10/2019", End: "10/10/2020", Price: "10000", Image: "./assets/card-1"},
          {Area: "10000", City: "Seattle", State: "WA", Zip: "98105", Soil: "Chalky", Start: "10/10/2019", End: "10/10/2021", Price: "15000", Image: "./assets/card-2.jpg"}
        ]
      };

      this.handleAreaChange = this.handleAreaChange.bind(this);
      this.handleCityChange = this.handleCityChange.bind(this);
      this.handleStateChange = this.handleStateChange.bind(this);
      this.handleZipChange = this.handleZipChange.bind(this);
      this.handleSoilChange = this.handleSoilChange.bind(this);
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.getBase64 = this.getBase64.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAreaChange(event) {
    this.setState({Area: event.target.value});
  }
  handleCityChange(event) {
    this.setState({City: event.target.value});
  }
  handleStateChange(event) {
    this.setState({State: event.target.value});
  }
  handleZipChange(event) {
    this.setState({Zip: event.target.value});
  }
  handleSoilChange(event) {
    var soilType = ["", "Clay", "Sandy", "Silty", "Peaty", "Chalky", "Loamy"];
    this.setState({Soil: soilType[event.target.value]});
  }
  handleStartChange(event) {
    this.setState({Start: event.target.value});
  }
  handleEndChange(event) {
    this.setState({End: event.target.value});
  }
  handlePriceChange(event) {
    this.setState({Price: event.target.value});
  }
  getBase64(e) {
    var file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({
        Image: reader.result
      })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  handleSubmit(event) {
    var obj = {Area: this.state.Area,
      Location: this.state.City + " ," + this.state.State + " " + this.state.Zip,
      Soil: this.state.Soil,
      Availability: "From - " + this.state.Start + ", To - " + this.state.End,
      Price: this.state.Price,
      Image: this.state.Image,
    }
      this.state.info.push(obj);
      event.preventDefault();

      this.clearState(event);
      this.setState({});
  }

  clearState(event) {
      this.state.Area = '';
      this.state.City = '';
      this.state.State = '';
      this.state.Zip = '';
      this.state.Soil = 0;
      this.state.Start = '';
      this.state.End = '';
      this.state.Price = '';
      this.state.Image = '';
  }


  render() {
    return (
      <div>
        <main id="farmerspage" style={ farmerBack }>
          <h1> My Farms </h1>
            <div className="form-flex">
              <div id="farmers-form">
                <form>
                  <h2>Add a New Farm</h2>
                  <div>
                    <div className="form-row">
                      <label>
                        <div className="label-text">Area:</div>
                        <input type="text" id="area" placeholder="In sq m" value={this.state.Area} onChange={this.handleAreaChange} />
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        <div className="label-text">Location:</div>
                        <div>
                          <input type="text" id="city" placeholder="City" value={this.state.City} onChange={this.handleCityChange} />
                          <input type="text" id="state" placeholder="State" value={this.state.State} onChange={this.handleStateChange} />
                          <input type="text" id="zip" placeholder="Zip" value={this.state.Zip} onChange={this.handleZipChange} />
                        </div>
                      </label>
                    </div>

                    <div className="form-row">
                      <label className="num">
                        <div className="label-text">Soil Type:</div>
                        <select id="myList" value={this.state.Soil} onChange={this.handleSoilChange} >
                          <option value="0">Select soil type</option>
                          <option value="1">Clay</option>
                          <option value="2">Sandy</option>
                          <option value="3">Silty</option>
                          <option value="4">Peaty</option>
                          <option value="5">Chalky</option>
                          <option value="6">Loamy</option>
                        </select>
                      </label>
                    </div>

                    <div>
                      <label>
                        <div className="label-text">Availability:</div>
                        <input type="date" id="startDate" placeholder="Start" value={this.state.Start} onChange={this.handleStartChange} />
                        <input type="date" id="endDate" placeholder="End" value={this.state.End} onChange={this.handleEndChange} />
                      </label>
                    </div>

                    <div>
                      <label>
                        <div className="label-text">Price:</div>
                        <input type="text" id="price" placeholder="In $" value={this.state.Price} onChange={this.handlePriceChange} />
                      </label>
                    </div>

                    <div>
                      <label>
                        <div className="label-text">Image:</div>
                        <input type="file" id="image" onChange={this.getBase64} />
                      </label>
                    </div>

                    <div className="Buttons-Cancel-Add">
                      <div id="cancel-box">
                        <button id="cancelButton" className="button" aria-live="assertive" role="cancelButton">Cancel</button>
                      </div>
                      <div id="add-box">
                        <button id="addButton" className="button" onClick={this.handleSubmit} aria-live="assertive" role="addButton">Add</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div id="Farms-cards">
                <h2>Current farms</h2>
                <div id="loader">
                  <Loader type="MutatingDots" color='#438877' height={100} width={100} timeout={1500} margin-left/>
                </div>
                <Card info={this.state.info} />
              </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Farmer;
