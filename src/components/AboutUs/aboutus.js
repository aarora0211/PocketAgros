import React from "react";
import logo from './assets/about-us.jpeg';
import './aboutus.css';

class aboutus extends React.Component {
  render() {
    return (
      <div>
        <main id="mainAboutUs">
        <div id="main-image">
          <img id="aboutUsImg" src={logo} alt="About us heading"/>
        </div>
        <div className="white-color">
          <br />
          <h1>ABOUT POCKET AGRO</h1>
          <p>
            Pocket Agro is not just a company it is our passion. It is a program connecting end
            customers and growers through good food. Everyone buys fruits vegetables from stores all around.
            But what is the need for the stores to act as mediators? Moreover, why can’t we know what is being grown,
            what fertilizer is being used and when will the harvesting take place and get the produce delivered right at your door.
          </p>
          <br /><br />
        </div>
        <div className="purple-color">
          <br />
          <h1>OUR MISSION</h1>
          <p>
            Our goal is to make every consumer have full knowledge of what is in their plate and where
            it came from. And not only this, we want them to have the satisfaction that they grew it themselves.
            In the future, we plan to expand this to dairy farming, where people will have a share in cattle
            and receive their own bred milk and also poultry and fish farming.
          </p>
          <br /><br />
        </div>
        <div className="white-color">
          <br />
          <h1>HOW IT WORKS?</h1>
          <p>
            Farmers and consumers will sign up using their information.
            Farmers will put the choice of your farms out there for consumers to pick as “theirs”.
            Then both parties will discuss with them and decide what will be grown in that land and farmers
            will be transparent of what they are using in the farm. Farmers will also put a tentative calendar
            of adding fertilizers, sowing and harvesting on the interface. The customers will also be able to
            schedule visits to the farm. In the end of harvest season, we will pick a small amount of produce
            from the farmer and deliver it to consumers.
          </p>
          <br /><br />
        </div>
        <div className="purple-color" id="faq">
          <br />
          <h1>FAQ</h1>
          <h2><u>What will the farmers get?</u></h2>
          <p>A monthly fee to support you in your practices and support of thousands of customers in what they are already doing.</p>
          <h2><u>What will the farmers give?</u></h2>
          <p>A small amount of produce out to the customers.</p>
          <h2><u>What will the customers give?</u></h2>
          <p>A small monthly fee and their input in what they want to grow in “their” land.</p>
          <h2><u>What will the customers get?</u></h2>
          <p>Fruits and vegetables, they can call theirs and also experience in farming practices.</p>
          <h2><u>What will we get?</u></h2>
          <p>Your love and a small amount of fee to maintain our company.</p>
          <br /><br /><br /><br />
        </div>
      </main>
    </div>
    );
  }
}

export default aboutus;
