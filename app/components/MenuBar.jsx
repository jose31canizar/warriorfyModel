import React from 'react';
import SmoothScroll from './SmoothScroll';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuBarStyle: 'MenuBar'
    }
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          MenuBarStyle: prevState.MenuBarStyle + ' MenuBarHidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          MenuBarStyle: 'MenuBar'
        }
      });
    }
  }
  render() {

    var self = this;

    return (
      <div className={this.state.MenuBarStyle}>
        <SmoothScroll type={'menuButton'} sections={this.props.sections.map((v, i) => (self.props.data[i].title))}>
          {this.props.sections.map((v, i) => (
            <p onMouseDown={this.props.closeMenuBar} key={i}>{self.props.data[i].title}</p>))}
        </SmoothScroll>
      </div>
    );
  }
}

export default MenuBar;
