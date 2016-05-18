import React from 'react';
import { Link } from 'react-router';


export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          {/*<li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>*/}
          <li><a onClick={this.props.onLogout}>Logout</a></li>
        </ul>
        <nav className={'red darken-2'}>
          <div className="nav-wrapper">
            <Link to="/"><a className="brand-logo">StravaXL</a></Link>
            <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/summary">Summary</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li>
                <a className="dropdown-button" data-activates="dropdown1">
                  <img src={this.props.athlete.profile_medium} className="circle" style={{'borderRadius': '15%', 'width': '60%', 'marginTop': '8px', 'marginRight': '-25px'}}/>
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}