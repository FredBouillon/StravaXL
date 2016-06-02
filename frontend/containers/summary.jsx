import React from 'react';
import { connect } from 'react-redux';
import * as activitiesActions from '../actionCreators/activitiesActions';
import * as oauthUtils from '../utils/oauth';
import { getDistinctYears, getActivityStats } from '../selectors/activities';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SummaryContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      activitiesActions.fetchActivities(oauthUtils.getAccessToken())
    );
  }

  _onYearChange() {
    console.log('year change');
  }

  _renderYears() {
    if (this.props.years) {
      return this.props.years.map((year, index) => (
        <MenuItem value={index} primaryText={year} />
      ));
    }
    return <MenuItem />;
  }

  render() {
    return (
      <div>
        <SelectField value={1} onChange={this._onYearChange}>
          {this._renderYears()}
        </SelectField>
        <div>{'Activities'}</div>
        <div>{`Activity count: ${this.props.activityStats.activityCount || 'Loading...'}`}</div>
        <div>{`Total distance: ${this.props.activityStats.totalDistance || 'Loading...'}`}</div>
        <div>{`Total elevation: ${this.props.activityStats.totalElevation || 'Loading...'}`}</div>
      </div>
    );
  }
}

SummaryContainer.propTypes = {
  activityStats: React.PropTypes.object,
  years: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  activityStats: getActivityStats(state),
  years: getDistinctYears(state),
});

export default connect(
  mapStateToProps
)(SummaryContainer);

// import React from 'react';

// export default class Summary extends React.Component { //eslint-disable-line
//   render() {
//     return (
//       <div>
//         <div>{'Summary'}</div>
//         <div className="row">
//           <div className="col s1" style={{ border: '1px solid black' }}>{'1'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'2'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'3'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'4'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'5'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'6'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'7'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'8'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'9'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'10'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'11'}</div>
//           <div className="col s1" style={{ border: '1px solid black' }}>{'12'}</div>
//         </div>
//       </div>
//     );
//   }
// }
