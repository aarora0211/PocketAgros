  import React, { Component } from 'react';

  class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {info:[]}
      this.componentDidMount();
      this.state = props;
    };

    componentDidMount() {
      fetch('../data.json')
        .then(response => response.json())
        .then(data => {let processedData = data
        this.setState({info: processedData})
      });
    }

    render() {
      return (
        <div id="row" className="row">
        {this.state.info.map((cardDetails,index) => (
            <div className="column">
              <div className="card">
                <img src={cardDetails.Image} alt={"My farm " + (index + 1)} />
                  <div className="container">
                    <em>Area : {cardDetails.Area} in sq m</em>
                    <em>Location : {cardDetails.City} ,{cardDetails.State} {cardDetails.Zip}</em>
                    <em>Soil type : {cardDetails.Soil}</em>
                    <em>Availability : From - {cardDetails.Start}, To - {cardDetails.End}</em>
                    <em>Price: {cardDetails.Price}$</em>
                  </div>
                  <button className="removeButton" onClick = {() => this.removeData(index)} aria-live="assertive" role="removeButton">Remove</button>
              </div>
            </div>
         ))}
        </div>
      );
    }

    removeData=(pid)=>{

       delete this.state.info[pid];
       // this.forceUpdate();
       this.setState({});

    }
  }














  export default Card;
