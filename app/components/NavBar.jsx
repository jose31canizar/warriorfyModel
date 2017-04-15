import React from 'react';
import SmoothScroll from './SmoothScroll';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBarStyle: 'NavBar'
    }
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: prevState.NavBarStyle + ' NavBarHidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: 'NavBar'
        }
      });
    }
  }
  render() {

    var self = this;

    return (
      <div className={this.state.NavBarStyle}>
        <SmoothScroll type={'navButton'} sections={this.props.sections.map((v, i) => (self.props.data[i].title))}>
          {this.props.sections.map((v, i) => (
            <p key={i}>{self.props.data[i].title}</p>))}
        </SmoothScroll>
      </div>
    );
  }
}

export default NavBar;
