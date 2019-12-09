import React, {Component} from 'react';
import './customer.css';
import CreateCards from './createCards';
import customerBackground from './assets/Veges.jpg';

let customerBack = {
  backgroundImage: `url(${customerBackground})`
};

class customer extends Component {

  constructor(props) {
    super(props);
    this.state = {dataset: [{Farm_Name:"Dhillon's Agriculture", Title:"The best quality organic produce available", Price:"200", Link:'./assets/Farm2.jpg'},
        {Farm_Name:"PNW Agriculture Co.", Title:"Freshness Guranteed", Price:"250", Link:'./assets/Farm3.jpg'},
        {Farm_Name:"Fresh Produce", Title:"Serving from the 150 years", Price:"180", Link:'./assets/Farm1.jpeg'},
        {Farm_Name:"Fresh Produce", Title:"Serving from the 150 years", Price:"1820", Link:'./assets/Farm1.jpeg'},
      ]
    };
  }

  render() {
    return (
      <div>
      <main id="mainCustomer" style={customerBack}>
        <div className = "background" id="main-image">
          <h1 id="custH1">FARMS AVAILABLE</h1>
          <div className = "instructions">
            <p id="textP">Our community's local farms. Everything used to grow your produce is of best quanlity and organic</p>
            <p id="textP">Please click on each box to see the details</p>
          </div>
          <br/><br/><br/>
          <select className = "dropdown" id="dropbtn" name="Expected Start Date">
            <option value="Sort By">Sort by</option>
            <option value="$-$$$" onClick={()=>this.sortBy("$-$$$")}>$-$$$</option>
            <option value="$$$-$" onClick={()=>this.sortBy("$$$-$")}>$$$-$</option>
            <option value="A-Z" onClick={()=>this.sortBy("A-Z")}>A-Z</option>
          </select>

        <div className= "farms-available">
          <CreateCards info={this.state.dataset}/>
        </div>
         <br/><br/><br/><br/><br/><br/><br/>
         <h2 id="customerInstructions">Can't find the suitable farm? Fill up this form and one of our customer representatives will contact you</h2>


    <div className="container2">
      <form action="stage1_customer.html">
      <div className="row2">
        <div className="col-25">
          <label id="customerLabel" htmlFor="fname">First Name</label>
        </div>
        <div className="col-75">
          <input id="customerInput" type="text" id="fname" name="firstname" placeholder="Your name.."/>
        </div>
      </div>
      <div className="row2">
        <div className="col-25">
          <label id="customerLabel" htmlFor="lname">Last Name</label>
        </div>
        <div className="col-75">
          <input id="customerInput" type="text" name="lastname" placeholder="Your last name.."/>
        </div>
      </div>
      <div className="row2">
        <div className="col-25">
          <label id="customerInput" id="customerLabel" htmlFor="Email">Email ID</label>
        </div>
        <div className="col-75">
          <input id="customerEmail" type="email" id="email" placeholder="Enter email" name="email"/>
        </div>
      </div>
      <div className="row2">
        <div className="col-25">
          <label id="customerLabel" htmlFor="Expected Start Date">Expected Start Date</label>
        </div>
        <div className="col-75">
          <select id="customerInput" className = "expected" id="Expected Start Date" name="Expected Start Date">
            <option value="Within a week">Within a week</option>
            <option value="Within a month">Within a month</option>
            <option value="Within 3 months">Within 3 months</option>
            <option value="Just an inquiry">Just an inquiry</option>
          </select>
        </div>
      </div>
      <div className="row2">
        <div className="col-25">
          <label htmlFor="Your requirements">Your requirements</label>
        </div>
        <div className="col-75">
          <textarea id="customerInput" id="Your requirements" name="Your requirements" placeholder="Your requirements.."></textarea>
        </div>
      </div>
      <div className="row2">
        <input id="customerCard" type="submit" value="Submit"/>
      </div>
      </form>
    </div>
    </div>
      </main>
      </div>
    );
  }

  sortBy(type) {
    console.log("here");
    var sort_set = this.state.dataset;
    if (type === '$-$$$') {
      let sorted = false;
      let temp;
      while(!sorted) {
        sorted = true;
        for (let i = 0; i < sort_set.length - 1; i++) {
          if (sort_set[i].Price > sort_set[i+1].Price) {
            temp = sort_set[i];
            sort_set[i] = sort_set[i+1];
            sort_set[i+1] = temp;
            sorted = false;
          }
        }
      }
    } else if(type === '$$$-$') {
      let sorted = false;
      let temp;
      while(!sorted) {
        sorted = true;
        for (let i = 0; i < sort_set.length - 1; i++) {
          if (sort_set[i].Price < sort_set[i+1].Price) {
            temp = sort_set[i];
            sort_set[i] = sort_set[i+1];
            sort_set[i+1] = temp;
            sorted = false;
          }
        }
      }
    } else {
        let sorted = false;
        let temp;
        while(!sorted) {
          sorted = true;
          for (let i = 0; i < sort_set.length - 1; i++) {
            if (sort_set[i].Farm_Name > sort_set[i+1].Farm_Name) {
              temp = sort_set[i];
              sort_set[i] = sort_set[i+1];
              sort_set[i+1] = temp;
              sorted = false;
            }
          }
        }
      }
  this.setState({dataset: sort_set});
}
}

export default customer;
