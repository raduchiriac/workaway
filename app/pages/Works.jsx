import React, { Component } from 'react';
import Page from '../pages/Page';
import WorksContainer from '../containers/WorksContainer';

class Works extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'works:';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'workaway crawl' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <WorksContainer {...this.props} />
      </Page>
    );
  }
}

export default Works;
