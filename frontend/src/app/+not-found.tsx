import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from '@redshank/native';
import {Link} from '@react-navigation/native';

export default function NotFoundScreen() {
  return (
    <>
      <Box style={styles.container}>
        <Text type="title">This screen doesn't exist.</Text>
        <Link screen="(tabs)" style={styles.link}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
