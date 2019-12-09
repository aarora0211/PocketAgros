import React, {Component} from 'react';
import './customer.css'
class createCards extends Component {

  constructor(props) {
    super(props);
    this.state = {cardData:[], button_action:["Add to Cart","Add to Cart", "Add to Cart"], card_number:[0,1,2], card_name:[], inc:0, dec:0};
    this.state.cardData = this.props.info;
    this.state.button_action = this.add_to_cart_count(this.state.cardData.length);
    this.state.card_number = this.count_cards(this.state.cardData.length);
  }

  render() {
    return(
      <div className="rows1" id = "card_list">
      {this.generateCards()}
      </div>
    );
  }

generateCards(){
  var indents = [];
  for (let i = 1; i <= this.state.cardData.length; i++) {
    let cardDets = this.state.cardData[i-1];
    let btn = this.state.button_action[i-1];
    let cn = this.state.card_number[i-1];
    indents.push(
      <div className="customerCard">
        <div className="customerContainer" id={"customerContainer"+i}>
          <img className="FarmImg" id={"img"+i} src={ require(""+cardDets.Link) } alt="Company Logo"/>
          <h4 className="cardHeading"id = {"Header"+i}>{cardDets.Farm_Name}</h4>
          <p className="cardDescription"id = {"Catchy_Line"+i}>{cardDets.Title}</p>
          <p id={"Price"+i}>{'$'+cardDets.Price}</p>
          <p><button id="customerCard" onClick={()=>this.onClickButton(cn,this.state.cardData)}>{btn}</button></p>
        </div>
      </div>
    );
  }
  return indents;
}

  add_to_cart_count(length) {
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr.push("Add to Cart");
    }
    return arr;
  }

  count_cards(length) {
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  }

  onClickButton(i,data) {
    var new_button = [];
    if(this.state.button_action[i] === "Add to Cart") {
      for(var k = 0; k < data.length; k++) {
        if(k===i) {
          new_button.push("Remove From Cart");
        } else {
          new_button.push(this.state.button_action[k]);
        }
      }
      this.setState({button_action: new_button, cardData:data});
    }
    else {
      data[i].Farm_Name = this.props.info[i].Farm_Name;
      for(var k = 0; k < data.length; k++) {
        if(k===i) {
          new_button.push("Add to Cart");
        } else {
          new_button.push(this.state.button_action[k]);
        }
      }
      this.setState({button_action: new_button, cardData:data});
    }
  }
}

export default createCards;
