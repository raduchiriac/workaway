import React, { PropTypes } from 'react';

import classNames from 'classnames/bind';
import {Card} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import styles from '../css/components/work';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.cx = classNames.bind(styles);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
  }

  handleFavorite() {
    this.props.handleFavorite(this.props.wid);
  }

  handleArchive() {
    this.props.handleArchive(this.props.wid);
  }

  render() {
    return (
      <Card className={this.cx('work')} key={this.props.wid}>
        <a href={this.props.link} rel="noopener noreferrer" target="_blank">
          <div className={this.cx('card-media')} style={{backgroundImage: `url(${this.props.img})`}}>
            <span className={this.cx('title')}>{this.props.text}</span>
          </div>
        </a>
        <div>
          <IconButton iconClassName="material-icons" onClick={this.handleFavorite}>
            star
          </IconButton>
          <IconButton iconClassName="material-icons" onClick={this.handleArchive}>
            archive
          </IconButton>
        </div>
      </Card>
    );
  }
}

Work.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  wid: PropTypes.string.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
};

export default Work;