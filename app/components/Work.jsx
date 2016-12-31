import React, { PropTypes } from 'react';

import classNames from 'classnames/bind';
import Card from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import styles from '../css/components/work';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.cx = classNames.bind(styles);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.state = {
      hover: false,
    };
  }

  handleFavorite() {
    this.props.handleFavorite(this.props.work.wid, this.props.work.favorite);
  }

  handleArchive() {
    this.props.handleArchive(this.props.work.wid);
  }

  handleMouseOver() {
    this.setState({hover: true});
  }

  handleMouseOut() {
    this.setState({hover: false});
  }

  render() {
    return (
      <Card className={this.cx('work')} key={this.props.work.wid}>
        <a href={this.props.work.link} rel="noopener noreferrer" target="_blank">
          <div className={this.cx('card-media')} style={{backgroundImage: `url(${this.props.work.img})`}}>
            <span className={this.cx('title')}>{this.props.work.title}</span>
          </div>
          {this.state.hover && <div className={this.cx('excerpt')}>
            {this.props.work.excerpt}
          </div>}
        </a>
        <div>
          <IconButton onClick={this.handleFavorite}>
            <FontIcon className="material-icons" color={this.props.work.favorite ? 'orange' : ''}>star</FontIcon>
          </IconButton>
          <IconButton iconClassName="material-icons" onClick={this.handleArchive} disabled={!!this.props.work.favorite}>
            archive
          </IconButton>
          <IconButton iconClassName="material-icons" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
            info
          </IconButton>
        </div>
      </Card>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
};

export default Work;
