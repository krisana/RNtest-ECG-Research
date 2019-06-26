import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Card from './card';

class ListView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderList() {
    const { feeds } = this.props;
    console.log('feeds', feeds);
    return feeds && feeds.map(feed => this.renderCard(feed));
  }

  renderCard = (feed) => {
    if (feed) {
      return (
        <Card
          key={feed.url}
          url={feed.url}
          title={feed.title}
          thumbnail={feed.thumbnail}
        />
      );
    }
    return null;
  }
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderList()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  }
});

export default ListView;