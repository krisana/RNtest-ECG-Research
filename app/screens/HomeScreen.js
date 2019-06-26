import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/Layouts';
import ListView from '../components/ListView';

import { getNews } from '../actions';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount = () => this.getNews();

  getNews = async () => {
    await this.props.getNews();
  }

  render() {
    return (
      <Layout navBarTitle="ECG research news">
        <ListView feeds={this.props.feed} />
      </Layout>
    );
  }
}

HomeScreen.defaultProps = {
  getNews: null,
  feed: [],
  loading: false,
};

HomeScreen.propTypes = {
  getNews: PropTypes.func,
  feed: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { feed, loading } = state.news;
  return {
    feed,
    loading,
  };
};

export default connect(mapStateToProps, {
  getNews,
})(HomeScreen);
