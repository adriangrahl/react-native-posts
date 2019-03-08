import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const white = '#FFF';
const titleColor = '#3F2F2C';
const subTitle = '#ddd';

const Styles = StyleSheet.create({
  author: {
    borderBottomWidth: 1,
    borderColor: subTitle,
    fontSize: 10,
    paddingBottom: 10,
  },
  description: {
    marginTop: 5,
  },
  post: {
    backgroundColor: white,
    borderRadius: 3,
    fontFamily: 'sans-serif',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 15,
  },
  title: {
    color: titleColor,
    fontWeight: '600',
  },
});

const Post = ({ title, author, description }) => (
  <View style={Styles.post}>
    <Text style={Styles.title}>{title}</Text>
    <Text style={Styles.author}>{author}</Text>
    <Text style={Styles.description}>{description}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
