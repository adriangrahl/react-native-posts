import './config/reactotron';
import './config/devtools';

import React, { Component } from 'react';
import { 
  StyleSheet, View, ScrollView, Text, Platform,
} from 'react-native';

import Post from '~/components/Post';

import PropTypes from 'prop-types';

const white = '#FFF';
const primary = '#fb7171';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: white,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        height: 50,
        paddingTop: 20,
      },
      android: {
        height: 30,
        paddingTop: 0,
      },
    }),
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
  };

  static defaultProps = {
    posts: [],
  };

  state = {
    posts: [
      {
        id: 1,
        title: 'React Native Rocks!',
        author: 'Adrian Grahl Pereira',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      {
        id: 2,
        title: 'React Native Rocks!',
        author: 'Adrian Grahl Pereira',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 3,
        title: 'React Native Rocks!',
        author: 'Adrian Grahl Pereira',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        id: 4,
        title: 'React Native Rocks!',
        author: 'Adrian Grahl Pereira',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        id: 5,
        title: 'React Native Rocks!',
        author: 'Adrian Grahl Pereira',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        id: 6,
        title: 'React Native Rocks!',
        author: 'Adrian Grahl Pereira',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Native Posts
          </Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
