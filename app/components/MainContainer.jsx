import React, {Component} from 'react';
import SectionContainer from './SectionContainer.jsx';
import SectionFactory from './SectionFactory.jsx';
import Label from './Label.jsx';
import MenuBarIcon from './MenuBarIcon.jsx';

import Intro from './Intro.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBarState: 'menu-bar-close'
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.open) {
      this.state.menuBarState = 'MainContainer menu-bar-open';
    } else {
      this.state.menuBarState = 'MainContainer menu-bar-close';
    }
  }
  render() {
    var self = this;

    return (
        <div className={this.state.menuBarState}>
          <MenuBarIcon togglePanel={this.props.togglePanel} open={this.props.open}/>
          <Intro/>
          <SectionContainer>
            {this.props.sections.map((v, i) => (
              <div>
              <Label label={this.props.data[i].label}/>
              <SectionFactory id={self.props.data[i].title} key={i} data={self.props.data[i]}/>
              </div>
            ))}
          </SectionContainer>
        </div>
    )
  }
}

export default MainContainer;
