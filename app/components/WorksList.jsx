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
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
  }

  handleFavorite(wid, favorite) {
    this.props.makeWorkFavorite(wid, favorite);
  }

  handleArchive(wid) {
    this.props.makeWorkArchive(wid);
  }

  render() {
    const items = this.props.works.map((work, key) => <Work
      index={key}
      wid={work.wid}
      key={key}
      link={work.link}
      text={work.title}
      favorite={work.favorite}
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
  return {
    works: state.work.works
  };
}

WorksList.propTypes = {
  works: PropTypes.array.isRequired,
  makeWorkFavorite: PropTypes.func.isRequired,
  makeWorkArchive: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { makeWorkFavorite, makeWorkArchive })(WorksList);
