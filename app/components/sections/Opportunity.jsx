import React, {Component} from 'react';

class Opportunity extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'header'}>
          <h1>Every person on the planet has dreams, aspirations and goals. Most are stifled by the gap between dreams and reality.</h1>
        </div>
        <div className={'content'}>
          <div className={'problems'}>
            <div className={'problems-label'}>
              <h3>problems</h3>
            </div>
            <div className={'problem-1'}>
              <h3>Unclear</h3>
              <p>People often are confused.</p>
            </div>
            <div className={'problem-2'}>
              <h3>Distractable</h3>
              <p>People are often distracted.</p>
            </div>
            <div className={'problem-3'}>
              <h3>Inadequately Supported</h3>
              <p>People are often Inadequately supported.</p>
            </div>
          </div>
          <div className={'solutions'}>
            <div className={'solutions-label'}>
              <h3>solutions</h3>
            </div>
            <div className={'solution-1'}>
              <h3>Clarity</h3>
              <p>People get clarity.</p>
            </div>
            <div className={'solution-2'}>
              <h3>Focus</h3>
              <p>People get focus.</p>
            </div>
            <div className={'solution-3'}>
              <h3>Support</h3>
              <p>People get support.</p>
            </div>
          </div>
        </div>

          <div className={'overall'}>
            <div className={'problem'}>
              <div className={'problem-label'}>
                <h3>overall problem</h3>
              </div>
            </div>
            <div className={'solution'}>
              <div className={'solution-label'}>
                <h3>overall solution</h3>
              </div>
            </div>
          </div>

      </div>
    )
  }
};

export default Opportunity;