import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li><a href="#" aria-live="assertive">Terms &amp; Conditions</a></li>
            <li><a href="#" aria-live="assertive">Privacy Policy</a></li>
            <li>&copy; 2019 Copyright Pocket-Agro Inc.</li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
