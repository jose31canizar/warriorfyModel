import React, {Component} from 'react';


class SectionContainer extends Component {
  render() {
    return (
      <div>
      <div className={'SectionContainer'}>
        {this.props.children}
      </div>
    </div>);
  }
}


export default SectionContainer;
