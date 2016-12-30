import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import WorksList from '../components/WorksList';
import styles from '../css/components/works-container';

const cx = classNames.bind(styles);

class WorksContainer extends Component {
  render() {
    const { works } = this.props;
    return (
      <div className={cx('works-container')}>
        <WorksList
          works={works}
         />
      </div>
    );
  }
}

WorksContainer.propTypes = {
  works: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    works: state.work.works,
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(WorksContainer);
