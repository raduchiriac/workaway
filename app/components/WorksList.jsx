import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { makeWorkFavorite, makeWorkArchive } from '../actions/works';

import Work from '../components/Work';
import styles from '../css/components/works-list';

class WorksList extends React.Component {
  constructor(props) {
    super(props);
    this.cx = classNames.bind(styles);
  }

  handleFavorite(wid) {
    makeWorkFavorite(wid);
  }

  handleArchive(wid) {
    makeWorkArchive(wid);
  }

  render() {
    const items = this.props.works.map((work, key) => <Work
      index={key}
      wid={work.wid}
      key={key}
      link={work.link}
      text={work.title}
      handleArchive={this.handleArchive}
      handleFavorite={this.handleFavorite}
      img={work.img} />);

    return (
      <div className={this.cx('works-list')}>
        {items}
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {...state.work};
}

WorksList.propTypes = {
  works: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { makeWorkFavorite, makeWorkArchive })(WorksList);
