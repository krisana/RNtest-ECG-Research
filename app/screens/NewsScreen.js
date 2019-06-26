import React, {Component} from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import Layout from '../components/Layouts';

class NewsScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout back navBarTitle="ECG research news">
        <View style={{ flex: 1 }}>
          <WebView
            source={{uri: this.props.url}}
          />
        </View>
      </Layout>
    );
  }
}

export default NewsScreen;